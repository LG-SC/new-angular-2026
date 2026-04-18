import { Injectable } from "@angular/core";
import { INewTask } from "../../assets/interfaces/ITasks.model";

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor() {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : this.tasks;

    if (tasks) {
      this.tasks = tasks;
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private tasks = [
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
    ];

    getUserTasks(userId: string) {
      return this.tasks.filter(task => task.userId === userId);
    }
    addTask(newTask: INewTask, userId: string) {
      const task = {
        id: `t${new Date().getTime().toString()}`,
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      };
      this.tasks.push(task);
      this.saveTasks();
    }
    removeTask(taskId: string) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks();
    }
}
