import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroInstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-instituicao',
  templateUrl: 'cadastro-instituicao.html',
})
export class CadastroInstituicaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroInstituicaoPage');
  }
  goToCadastroPerfil(params){
    if (!params) params = {};
    this.navCtrl.push('CadastroInfoInstituicaoPage');
  }
  goToBuscaUsuario(params){
    if (!params) params = {};
    this.navCtrl.push('BuscaUsuarioPage');
  }
}
