import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeInstituicaoPage } from './home-instituicao';

@NgModule({
  declarations: [
    HomeInstituicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeInstituicaoPage),
  ],
})
export class HomeInstituicaoPageModule {}
