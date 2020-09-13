import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import detalhes from './../../assets/files/detalheCidades.json'
import { CollapseIdModel } from './../_models/collapse-id.model';
import { PrincipalService } from './../_services/principal.service';

declare var $: any;  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  detalhes = detalhes.detalhes
  public flag: CollapseIdModel = new CollapseIdModel();

  cars: any[];
	
  responsiveOptions;

  constructor(
    private carService: PrincipalService
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => {
      this.cars = cars
    });
  
  }


  irAoMApa(parm: any, i: Number) {
    alert("Abrir mapa de -> !" + parm.cidade +' | '+ "Array nº: " + i)
  }


  openCloseCollapse(key) {
    switch (key) {
      case "collapse1":
      this.flag.coll1 = !this.flag.coll1
      break;
      case "collapse2":
      this.flag.coll2 = !this.flag.coll2
      break;   
      case "collapse3":
      this.flag.coll3 = !this.flag.coll3
      break;   
      case "collapse4":
      this.flag.coll4 = !this.flag.coll4
      break;   
      case "collapse5":
      this.flag.coll5 = !this.flag.coll5
      break;                                                   
      default:
      this.flag.coll6 = !this.flag.coll6
      break;
    }
  }  


}
