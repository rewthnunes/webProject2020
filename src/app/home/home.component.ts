import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import detalhes from './../../assets/files/detalheCidades.json'
import { CollapseIdModel } from './../_models/collapse-id.model';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PrincipalService } from './../_services/principal.service';
import { Router } from '@angular/router';

declare var $: any;  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  detalhes = detalhes.detalhes
  public flag: CollapseIdModel = new CollapseIdModel();

  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
  imagensMostradas:any[] = []
  slides = [
    {image: './../assets/images/cidades_img/americana-sp.jpg', name: 'Americana'},
    {image: './../assets/images/cidades_img/arthurNoogueira.jpg', name: 'Arthur Nogueira'},
    {image: './../assets/images/cidades_img/Castelo.jpg', name: 'Castelo'},
    {image: './../assets/images/cidades_img/cosmopolis.jpg', name: 'Cosmopólis'},
    {image: './../assets/images/cidades_img/engCoelho.jpg', name: 'Engenheiro Coelho'},
    {image: './../assets/images/cidades_img/holambra.jpg', name: 'Holambra'},
    {image: './../assets/images/cidades_img/hortolandia.jpg', name: 'Hortolândia'},
    {image: './../assets/images/cidades_img/indaiatuba.jpg', name: 'Indaiatuba'},
    {image: './../assets/images/cidades_img/itatiba.jpg', name: 'Itatiba'},
    {image: './../assets/images/cidades_img/jaguariuna.jpg', name: 'Jaguariúna'},
    {image: './../assets/images/cidades_img/montemor.jpg', name: 'Monte Mor'},
    {image: './../assets/images/cidades_img/morungaba.jpg', name: 'Morungaba'},
    {image: './../assets/images/cidades_img/novaOdessa.jpg', name: 'Nova Odessa'},
    {image: './../assets/images/cidades_img/paulinia.jpg', name: 'Paulínia'},
    {image: './../assets/images/cidades_img/pedreira.jpg', name: 'Pedreira'},
    {image: './../assets/images/cidades_img/staBarOeste.jpg', name: 'Sta. Barb. Oeste'},
    {image: './../assets/images/cidades_img/stoAntPosse.jpg', name: 'Sto. Ant. Posse'},
    {image: './../assets/images/cidades_img/sumare.jpg', name: 'Sumaré'},
    {image: './../assets/images/cidades_img/valinhos.jpg', name: 'Valinhos'},
    {image: './../assets/images/cidades_img/vinhedo.jpg', name: 'Vinhedo'}    
  ];  

  constructor(
    private carService: PrincipalService,
    private router: Router
  ) {
   }

   
  ngOnInit() {
    this.sortearImagens()
  }


  irAoMApa(parm: any, i: Number) {
    alert("Abrir mapa de -> !" + parm.cidade +' | '+ "Array nº: " + i)
    this.router.navigate(['map', parm]);
  }


  sortearImagens() {
    let numSorteados = []
    for (let index = 0; index < 5; index++) numSorteados.push(Math.floor(Math.random() * 20))
    for (let index = 0; index < 5; index++) this.imagensMostradas.push(this.slides[numSorteados[index]])   
  }


  openCloseCollapse(key) {
    switch (key) {
      case "collapse1":
      this.flag.coll1 = !this.flag.coll1
      break;
      case "collapse2":
      this.flag.coll2 = !this.flag.coll2
      break;   
    }
  }  


}
