import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroProfissionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-profissional',
  templateUrl: 'cadastro-profissional.html',
})
export class CadastroProfissionalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProfissionalPage');
  }
  goToCadastroPerfil(params){
    if (!params) params = {};
    this.navCtrl.push('CadastroInfoProfissionalPage');
  }
  goToBuscaPaciente(params){
    if (!params) params = {};
    this.navCtrl.push('BuscaUsuarioPage');
  }

}
