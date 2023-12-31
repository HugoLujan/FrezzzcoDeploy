import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { NosotrosComponent } from './home/pages/nosotros/nosotros.component';
import { BarberosComponent } from './home/pages/barberos/barberos.component';
import { ProductosComponent } from './shop/pages/productos/productos.component';
import { BasicelementsComponent } from './components/basicelements/basicelements.component';
import { DetailsproductComponent } from './shop/pages/detailsproduct/detailsproduct.component';
import { CarritoComponent } from './shop/pages/carrito/carrito.component';
import { FormProductComponent } from './shop/pages/form-product/form-product.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'nosotros',     component: NosotrosComponent },
    { path: 'barberos',     component: BarberosComponent },
    { path: 'citas',     component: BasicelementsComponent },
    { path: 'productos',     component: ProductosComponent },
    { path: 'detailsproduct/:id', component: DetailsproductComponent },
    { path: 'carrito',     component: CarritoComponent },
    { path: 'formProduct',     component: FormProductComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        
    ],
})
export class AppRoutingModule { }
