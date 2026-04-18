import { Component, Input } from '@angular/core';
import { IUser } from '../../assets/interfaces/IUser.model';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) user!: IUser;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Summary of task 1',
      dueDate: '2026-07-01',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Task 2',
      summary: 'Summary of task 2',
      dueDate: '2026-07-02',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Task 3',
      summary: 'Summary of task 3',
      dueDate: '2026-07-03',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Task 4',
      summary: 'Summary of task 4',
      dueDate: '2026-07-04',
    }
  ]

  get name() {
    return `${this.user?.name}`;
  }
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

}
