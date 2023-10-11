import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { BarberosComponent } from './barberos/barberos.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { FormProductComponent } from './form-product/form-product.component';
import { DoneComponent } from './done/done.component';




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NosotrosComponent,
        FooterComponent,
        BarberosComponent,
        ProductosComponent,
        CarritoComponent,
        DetailsproductComponent,
        FormProductComponent,
        DoneComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
