import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { NosotrosComponent } from "./Home/pages/nosotros/nosotros.component";
import { BarberosComponent } from "./Home/pages/barberos/barberos.component";
import { ProductosComponent } from "./shop/pages/productos/productos.component";
import { BasicelementsComponent } from "./components/basicelements/basicelements.component";
import { DetailsproductComponent } from "./shop/pages/detailsproduct/detailsproduct.component";
import { CarritoComponent } from "./shop/pages/carrito/carrito.component";
import { FormProductComponent } from "./shop/pages/form-product/form-product.component";
import { DoneComponent } from "./shop/pages/done/done.component";
import { PagoComponent } from "./shop/pages/pago/pago.component";
import { UserAppointmentComponent } from "./Home/pages/user-appointment/user-appointment.component";
import { LoginComponent } from "./login/login.component";
import { MenuAdminComponent } from "./admin/menu-admin/menu-admin.component";
import { CarruselComponent } from "./admin/carrusel/carrusel.component";
import { EditProductComponent } from "./shop/pages/edit-product/edit-product.component";
import { FormEditComponent } from "./shop/pages/form-edit/form-edit.component";
import { AdminFormComponent } from "./admin/createAdmin/admin-form/admin-form.component";
import { DashboardComponent } from "./admin/pages/dashboard/dashboard.component";

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
    { path: 'formProduct',     component: FormProductComponent },
    { path: 'done',     component: DoneComponent },
    { path: 'pago',     component: PagoComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'Registro',     component: UserAppointmentComponent },
    { path: 'dashboard',     component: DashboardComponent },
    { path: 'editProduct',     component: EditProductComponent },
    { path: 'edit-product/:id', component: FormEditComponent },
    { path: 'carrusel',     component: CarruselComponent },
    { path: 'signUp',     component: AdminFormComponent },
    { path: 'menuAdmin',     component: MenuAdminComponent },
    {path: 'index', component: ComponentsComponent},
    { path: 'barberos',     component: BarberosComponent },
    { path: 'nosotros',     component: NosotrosComponent },
];

// const routes: Routes = [
//   {
//     path: "auth",
//     loadChildren: () =>
//       import("./admin/auth.module").then((m) => m.AuthModule),
//   },
//   {
//     path: "home",
//     loadChildren: () =>
//       import("./Home/home.module").then((m) => m.HomeModule),
//   },
// ];
@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}



