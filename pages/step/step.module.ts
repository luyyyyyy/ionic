import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepPage } from './step';

@NgModule({
  declarations: [
    StepPage,
  ],
  imports: [
    IonicPageModule.forChild(StepPage),
  ],
  exports: [
    StepPage
  ]
})
export class StepPageModule {}
