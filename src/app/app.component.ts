import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
