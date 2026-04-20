import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, DestroyRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  @Input({required: true}) userId!: string;
  userName!: string

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    const subscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.userName =this.usersService.users.find(user => user.id === params['userId'])?.name ?? 'Unknown User';
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
