import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './experienciaLaboral/experienciaLaboral.component';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';


const routes: Routes = [

{path:'',component:IndexcomponentComponent},
{path:'**',component:PaginaerrorComponent},



]
;

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
