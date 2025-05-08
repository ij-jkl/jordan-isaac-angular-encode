import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Importamos de bootstrap el provide animations para que funcione el lazy loading de las animaciones
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
