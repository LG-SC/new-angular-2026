import { TaskService } from './../tasks.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../assets/interfaces/ITasks.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: ITask;

  constructor(private taskService: TaskService) {

  }

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
