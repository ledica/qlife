import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaUsuarioPage } from './busca-usuario';

@NgModule({
  declarations: [
    BuscaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaUsuarioPage),
  ],
})
export class BuscaUsuarioPageModule {}
