import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaLaboralComponent } from './experienciaLaboral/experienciaLaboral.component';
import { FooterComponent } from './footer/footer.component';
import { HysComponent } from './hys/hys.component';
import { BannerComponent } from './banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
NavbarComponent,
 AcercademiComponent,
      EducacionComponent,
      ExperienciaLaboralComponent,
      FooterComponent,
      HysComponent,
      BannerComponent,
      IndexcomponentComponent,
      PaginaerrorComponent,
PerfilComponent,

   ],
  imports: [
    NgCircleProgressModule.forRoot({}),
    BrowserModule,
    AppRoutingModule,
  HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   }
