import { Component, OnInit } from '@angular/core';
import { Formulario } from './../_models/form.model';
import * as $ from 'jquery/dist/jquery.min.js';

declare var $: any;

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public object: Formulario = new Formulario();
  public flagAlert: boolean = false;
  public message: string = undefined;
  public classeCss: string = undefined;

  constructor() { }

  ngOnInit() {
  }


  limpaForm() {
    this.object = new Formulario();
  }


  enviar() {
    if(this.validaForm()) {
      this.limpaForm()
      this.classeCss = "alert-success"
      this.message = "Mensagem enviada com sucesso"
      this.flagAlert = true
    }  
  }


  fechaAviso() {
    setTimeout(function(){}, 2000);
    this.flagAlert = false
  }


  validaForm(){
    if(!this.object.nome) {
      this.flagAlert = true
      this.classeCss = "alert-danger"
      this.message="Nome Obrigatório!"
      return false;
    } else if(!this.object.email) {
      this.flagAlert = true
      this.classeCss = "alert-danger"
      this.message="E-mail Obrigatório!"
      return false;
    } else if(!this.object.comentario) {
      this.flagAlert = true
      this.classeCss = "alert-danger"
      this.message="Comentário Obrigatório!"
      return false;
    }
    return true;
  }

}
