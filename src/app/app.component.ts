import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

import { IUser } from '../assets/interfaces/IUser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUser!: IUser;

  onSelectUser(userId: string) {
    console.log('Selected user ID:', userId);
    this.selectedUser = DUMMY_USERS.find(user => user.id === userId) || {id : 'u-1', name: 'No User Selected', avatar: 'none.jpg'};
  }

}
