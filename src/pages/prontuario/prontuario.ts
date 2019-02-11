import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-prontuario',
  templateUrl: 'prontuario.html',
})
export class ProntuarioPage {
  email: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: StorageService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.email = localUser.email;
    }
  }

}
