import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-indexcomponent',
  templateUrl: './indexcomponent.component.html',
  styleUrls: ['./indexcomponent.component.css']
})
export class IndexcomponentComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
    });
  }

}
