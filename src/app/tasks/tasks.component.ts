import { Component, Input } from '@angular/core';
import { IUser } from '../../assets/interfaces/IUser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) user!: IUser;

  get name() {
    return `${this.user.name}`;
  }

}
