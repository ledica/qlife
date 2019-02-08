import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFormacaoPage } from './cadastro-formacao';

@NgModule({
  declarations: [
    CadastroFormacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFormacaoPage),
  ],
})
export class CadastroFormacaoPageModule {}
