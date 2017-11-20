import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {AllMenuPage} from '../all-menu/all-menu'
import {MenuListPage} from '../menu-list/menu-list'
import { SearchMenuPage } from '../search-menu/search-menu'

/**
 * Generated class for the ClassifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {
  hotClassifyItems:Array<any>=[];
  styleOfCookingItems:Array<any>=[];
  foodMaterialItems:Array<any>=[];
  occasionItems:Array<any>=[];

  constructor(private myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
    this.loadData();
  }

  loadData(){
    this.myHttp
    .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/product/classify_memu.php')
    .subscribe((result:any)=>{
      console.log(result);
      if(result){
        this.hotClassifyItems=result.hotClassifyItems;
        this.styleOfCookingItems=result.styleOfCookingItems;
        this.foodMaterialItems=result.foodMaterialItems;
        this.occasionItems=result.occasionItems;
      }
    })
  }

  jumpToAllMenu(){
    this.navCtrl.push(AllMenuPage);
  }

  jumpToMenuList(){
    this.navCtrl.push(MenuListPage);
  }

  jumpToSearch(){
    this.navCtrl.push(SearchMenuPage);
  }

}
