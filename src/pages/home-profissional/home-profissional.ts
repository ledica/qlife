import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-profissional',
  templateUrl: 'home-profissional.html',
})
export class HomeProfissionalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProfissionalPage');
  }
  goToAlergia(){
    this.navCtrl.push('AlergiaPage');
  }

}
