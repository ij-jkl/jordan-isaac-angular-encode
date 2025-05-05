import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { UserTableComponent } from '../user-table/user-table.component';
import {User} from '../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, UserTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      user =>
        user.name.toLowerCase().includes(term) ||
        user.address.city.toLowerCase().includes(term)
    );
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.filterUsers();
  }
}
