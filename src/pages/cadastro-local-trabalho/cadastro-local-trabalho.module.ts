import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLocalTrabalhoPage } from './cadastro-local-trabalho';

@NgModule({
  declarations: [
    CadastroLocalTrabalhoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLocalTrabalhoPage),
  ],
})
export class CadastroLocalTrabalhoPageModule {}
