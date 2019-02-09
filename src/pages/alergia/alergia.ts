import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlergiaService } from '../../services/domain/alergia.service';
import { Alergia } from '../../models/alergia';


@IonicPage()
@Component({
  selector: 'page-alergia',
  templateUrl: 'alergia.html',
})
export class AlergiaPage {
  
  items: Alergia[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alergiaService: AlergiaService) {
  }

  ionViewDidLoad() {
    this.alergiaService.findAll()
    .subscribe(response=>{
      this.items = response;
    },error=>{});
    console.log('ionViewDidLoad AlergiaPage');
  }

}
