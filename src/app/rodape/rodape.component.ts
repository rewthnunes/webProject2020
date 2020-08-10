import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public textoRodape = "Copyright © 2020 Rewth. Todos os direitos reservados."

  constructor() { }

  ngOnInit() {
  }



}
