import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-selecao-dash-board',
  templateUrl: 'selecao-dash-board.html',
})
export class SelecaoDashBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecaoDashBoardPage');
  }
  goToHomePessoal(){
    this.navCtrl.push('HomePacientePage');
  }
  goToHomeProfissional(){
    this.navCtrl.push('HomeProfissionalPage');
  }
  goToHomeInstituicao(){
    this.navCtrl.push('HomeInstituicaoPage');
  }
}
