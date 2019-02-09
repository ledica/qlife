import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlergiaService } from '../../services/domain/alergia.service';


@IonicPage()
@Component({
  selector: 'page-alergia',
  templateUrl: 'alergia.html',
})
export class AlergiaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alergiaService: AlergiaService) {
  }

  ionViewDidLoad() {
    this.alergiaService.findAll()
    .subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    });
    console.log('ionViewDidLoad AlergiaPage');
  }

}
