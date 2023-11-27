import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxUploaderModule } from 'ngx-uploader';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NosotrosComponent } from './Home/pages/nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './shop/pages/productos/productos.component';
import { CarritoComponent } from './shop/pages/carrito/carrito.component';
import { DetailsproductComponent } from './shop/pages/detailsproduct/detailsproduct.component';
import { FormProductComponent } from './shop/pages/form-product/form-product.component';
import { DoneComponent } from './shop/pages/done/done.component';
import { PagoComponent } from './shop/pages/pago/pago.component';
import { UserAppointmentComponent } from './Home/pages/user-appointment/user-appointment.component';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { EditProductComponent } from './shop/pages/edit-product/edit-product.component';
import { FormEditComponent } from './shop/pages/form-edit/form-edit.component';
import { AdminFormComponent } from './admin/createAdmin/admin-form/admin-form.component';
import { BarberosComponent } from './Home/pages/barberos/barberos.component';
import { CarruselComponent } from './admin/carrusel/carrusel.component';





@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        BarberosComponent,
        ProductosComponent,
        CarritoComponent,
        DetailsproductComponent,
        FormProductComponent,
        DoneComponent,
        PagoComponent,
        UserAppointmentComponent,
        LoginComponent,
        MenuAdminComponent,
        EditProductComponent,
        FormEditComponent,
        CarruselComponent,
        AdminFormComponent,
        NosotrosComponent,

    ],
    imports: [
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
