import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../../../assets/interfaces/ITasks.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<INewTask>();

  inputTitle: string = '';
  inputSummary: string = '';
  inputDueDate: string = '';

  constructor(private taskService: TaskService) {}

  onCancel() {
    console.log('Cancel adding a new task');
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.inputTitle,
      summary: this.inputSummary,
      dueDate: this.inputDueDate
    }, this.userId);
    this.close.emit();
  }
}
