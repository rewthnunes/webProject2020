import { Component, OnInit } from '@angular/core';
import data from './../../assets/files/dataObject.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {

  arrayCidades: any;

  constructor(
  ) { this.arrayCidades = data }

  ngOnInit() {
  }




}



