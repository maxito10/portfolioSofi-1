import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos();
  }

}
