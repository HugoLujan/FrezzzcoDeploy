import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module'; // Adjust the casing here to match the file name
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app.routing';
import { ComponentsModule } from 'app/components/components.module';
import { ExamplesModule } from 'app/examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxUploaderModule } from 'ngx-uploader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarberosComponent } from './pages/barberos/barberos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';


@NgModule({
  declarations: [ 
    // BarberosComponent,
    // NosotrosComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
export class HomeModule { }
