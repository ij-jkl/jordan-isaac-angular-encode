import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent {
  @Input() users: User[] = [];
}
