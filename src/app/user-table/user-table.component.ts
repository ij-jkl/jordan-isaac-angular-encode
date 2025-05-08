import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {User} from '../models/user.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent {
  @Input() users: User[] = [];
}
