import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule,TableModule,PaginatorModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent {
  @Input() users: User[] = [];


}
