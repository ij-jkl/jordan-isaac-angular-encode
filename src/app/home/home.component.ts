import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { UserTableComponent } from '../user-table/user-table.component';
import {User} from '../models/user.model';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, UserTableComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  // Inicializamos los usuarios que trajimos
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  // Normalizamos los nombres y las ciudades para poder buscar independientemente de si hay minuscula o mayuscula
  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      user =>
        user.name.toLowerCase().includes(term) ||
        user.address.city.toLowerCase().includes(term)
    );
  }

  // Nos permite realizar la busqueda dinamica
  onSearch(value: string): void {
    this.searchTerm = value;
    this.filterUsers();
  }
}
