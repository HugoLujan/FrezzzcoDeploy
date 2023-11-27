import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from 'app/components/components.component';
import { BarberosComponent } from './pages/barberos/barberos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: '',
    // component: ComponentsComponent,
    children:[
      {path: 'index', component: ComponentsComponent},
      { path: 'barberos',     component: BarberosComponent },
      { path: 'nosotros',     component: NosotrosComponent },
      {path: '**', redirectTo: 'Login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
