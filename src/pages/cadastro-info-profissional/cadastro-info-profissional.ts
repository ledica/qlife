import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-cadastro-info-profissional',
  templateUrl: 'cadastro-info-profissional.html',
})
export class CadastroInfoProfissionalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroInfoProfissionalPage');
  }
  goToCadastroLocaisTrabalho(params){
    if (!params) params = {};
    this.navCtrl.push('CadastroLocalTrabalhoPage');
  }
}
