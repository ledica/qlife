import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  public login(){
    this.navCtrl.push('SelecaoDashBoardPage');
  }
  public registrar(){
    this.navCtrl.push('CadastroContaPage');
  }
  public prontuario(){
    this.navCtrl.push('ProntuarioPage');
  }
}
