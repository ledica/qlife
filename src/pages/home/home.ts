import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { Credenciais } from '../../models/credenciais';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : Credenciais = {
    email: "",
    password: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {
    
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  public login(){
    console.log(this.creds);
    this.navCtrl.push('SelecaoDashBoardPage');
  }
  public registrar(){
    this.navCtrl.push('CadastroContaPage');
  }
  public prontuario(){
    this.navCtrl.push('ProntuarioPage');
  }
}
