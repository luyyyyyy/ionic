import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllMenuPage } from './all-menu';

@NgModule({
  declarations: [
    AllMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AllMenuPage),
  ],
  exports: [
    AllMenuPage
  ]
})
export class AllMenuPageModule {}
