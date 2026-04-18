import { Component, Input } from '@angular/core';
import { IUser } from '../../assets/interfaces/IUser.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { INewTask } from '../../assets/interfaces/ITasks.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) user!: IUser;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskService) {

  }

  get name() {
    return `${this.user?.name}`;
  }
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }
  get userId() {
    return this.user.id;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
