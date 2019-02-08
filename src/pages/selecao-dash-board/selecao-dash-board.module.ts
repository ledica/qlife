import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecaoDashBoardPage } from './selecao-dash-board';

@NgModule({
  declarations: [
    SelecaoDashBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecaoDashBoardPage),
  ],
})
export class SelecaoDashBoardPageModule {}
