import { Component, OnInit } from '@angular/core';
import { CollapseIdModel } from './../_models/collapse-id.model';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  public flag: CollapseIdModel = new CollapseIdModel();

  ngOnInit() {
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
