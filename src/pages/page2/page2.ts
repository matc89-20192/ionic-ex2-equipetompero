import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  public nome;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = navParams.get("nome");
  }

  confirmar(){
    let calback = this.navParams.get("calback");
    calback(this.editText, this.navParams.get('that'));
    this.navCtrl.pop();
  }
  cancelar(){
    this.navCtrl.pop();
  }
}
