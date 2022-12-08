import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-experienciaLaboral',
  templateUrl: './experienciaLaboral.component.html',
  styleUrls: ['./experienciaLaboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
experienciaLaboralList:any;
  constructor(private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaLaboralList=data.experienciaLaboral;
    })
  }

}
