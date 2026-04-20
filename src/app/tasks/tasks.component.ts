import { Component, computed, DestroyRef, inject, input, Input, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  tasksService = inject(TasksService);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);

  userId = input.required<string>();
  order = signal<'asc' | 'desc'>('asc');

  userTasks = computed(() => {
    const tasks = this.tasksService.allTasks().filter(task => task.userId === this.userId());
    return tasks.sort((a, b) => {
      if (this.order() === 'asc') {
        return a.id > b.id ? 1 : -1;
      } else {
        return a.id > b.id ? -1 : 1;
      }
    });
  });

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const order = params.get('order');
      if (order === 'asc' || order === 'desc') {
        this.order.set(order);
      }
    });
  }
}

