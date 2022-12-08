import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacionList:any;
  constructor(private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.education;
    })
  }

}
