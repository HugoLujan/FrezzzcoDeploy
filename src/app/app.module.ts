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
import { NosotrosComponent } from './home/pages/nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { BarberosComponent } from './home/pages/barberos/barberos.component';
import { ProductosComponent } from './shop/pages/productos/productos.component';
import { CarritoComponent } from './shop/pages/carrito/carrito.component';
import { DetailsproductComponent } from './shop/pages/detailsproduct/detailsproduct.component';
import { FormProductComponent } from './shop/pages/form-product/form-product.component';
import { DoneComponent } from './shop/pages/done/done.component';




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
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
