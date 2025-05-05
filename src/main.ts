import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import {importProvidersFrom} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';

// Importamos de bootstrap el provide animations para que funcione el lazy loading de las animaciones
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    ...AppRoutingModule,
    provideAnimations()
  ]
}).catch(err => console.error(err));
