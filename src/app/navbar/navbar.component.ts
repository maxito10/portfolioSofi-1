import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
    });
  }

}
