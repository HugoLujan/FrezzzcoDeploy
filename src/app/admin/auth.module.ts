import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';
import { AppRoutingModule } from 'app/app.routing';
import { ExamplesModule } from 'app/examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxUploaderModule } from 'ngx-uploader';


@NgModule({
  declarations: [
    DashboardComponent,
    // CarruselComponent,
    SidebarComponent,
    // LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUploaderModule
  ]
})
export class AuthModule { }
