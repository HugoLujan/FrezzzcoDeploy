import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NucleoiconsComponent } from 'app/components/nucleoicons/nucleoicons.component';
import { NosotrosComponent } from 'app/Home/pages/nosotros/nosotros.component';
import { BarberosComponent } from 'app/Home/pages/barberos/barberos.component';
import { BasicelementsComponent } from 'app/components/basicelements/basicelements.component';
import { ProductosComponent } from 'app/shop/pages/productos/productos.component';
import { DetailsproductComponent } from 'app/shop/pages/detailsproduct/detailsproduct.component';
import { CarritoComponent } from 'app/shop/pages/carrito/carrito.component';
import { FormProductComponent } from 'app/shop/pages/form-product/form-product.component';
import { DoneComponent } from 'app/shop/pages/done/done.component';
import { PagoComponent } from 'app/shop/pages/pago/pago.component';
import { LoginComponent } from 'app/login/login.component';
import { UserAppointmentComponent } from 'app/Home/pages/user-appointment/user-appointment.component';
import { EditProductComponent } from 'app/shop/pages/edit-product/edit-product.component';
import { FormEditComponent } from 'app/shop/pages/form-edit/form-edit.component';
import { AdminFormComponent } from './createAdmin/admin-form/admin-form.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';


const routes: Routes = [
//   {
//     path: '',
//     children:[
//     {path: 'dashboard', component: DashboardComponent},
//     { path: '', redirectTo: 'index', pathMatch: 'full' },
//     { path: 'nucleoicons',          component: NucleoiconsComponent },
//     { path: 'nosotros',     component: NosotrosComponent },
//     { path: 'citas',     component: BasicelementsComponent },
//     { path: 'productos',     component: ProductosComponent },
//     { path: 'detailsproduct/:id', component: DetailsproductComponent },
//     { path: 'carrito',     component: CarritoComponent },
//     { path: 'formProduct',     component: FormProductComponent },
//     { path: 'done',     component: DoneComponent },
//     { path: 'pago',     component: PagoComponent },
//     { path: 'login',     component: LoginComponent },
//     { path: 'Registro',     component: UserAppointmentComponent },
//     { path: 'dashboard',     component: DashboardComponent },
//     { path: 'editProduct',     component: EditProductComponent },
//     { path: 'edit-product/:id', component: FormEditComponent },
//     { path: 'signUp',     component: AdminFormComponent },
//     { path: 'menuAdmin',     component: MenuAdminComponent },
//       // {path: 'product', component}
//       {path: '**', redirectTo: 'Login'}
//     ]
//   }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
