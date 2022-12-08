import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
miPortfolio:any;
  constructor( private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.miPortfolio=data;
    });
  }

}
