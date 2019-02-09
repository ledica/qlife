import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoencaPage } from './doenca';

@NgModule({
  declarations: [
    DoencaPage,
  ],
  imports: [
    IonicPageModule.forChild(DoencaPage),
  ],
})
export class DoencaPageModule {}
