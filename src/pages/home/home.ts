import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { Credenciais } from '../../models/credenciais';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: Credenciais = {
    email: "",
    password: ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  public login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.setRoot('SelecaoDashBoardPage');
      },
        error => {});
  }
  public registrar() {
    this.navCtrl.push('CadastroContaPage');
  }
  public prontuario() {
    this.navCtrl.push('ProntuarioPage');
  }
}
