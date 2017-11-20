import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMenuPage } from './search-menu';

@NgModule({
  declarations: [
    SearchMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMenuPage),
  ],
  exports: [
    SearchMenuPage
  ]
})
export class SearchMenuPageModule {}
