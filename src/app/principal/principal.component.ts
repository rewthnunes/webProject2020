import { Component, OnInit } from '@angular/core';
import data from './../../assets/files/data.json';

declare var require: any

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('>>>>> ', data)
  }



}



