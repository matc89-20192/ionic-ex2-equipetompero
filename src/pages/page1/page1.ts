import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  public cumprimento;
  public nome;
  constructor(public navCtrl: NavController) {
    this.nome = "Fulano";
    this.cumprimento = "Oi, ";
  }
  trocar(){
    this.navCtrl.push("Page2",{
      nome: this.nome,
      calback : this.calback,
      that :this
    });
  }



  calback(retorno,that){
    that.nome = retorno;
    that.cumprimento = "Oi"+(retorno!=""?", ":"");
  }
}
