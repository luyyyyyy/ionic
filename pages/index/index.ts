import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { SearchMenuPage } from '../search-menu/search-menu'
import { MenuListPage } from '../menu-list/menu-list'

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  carouselItems:Array<any>=[];
  myMenuItems:Array<any>=[];
  
  constructor(private myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.loadData();
  }
  loadData(){
    this.myHttp
    .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/product/index.php')
    .subscribe((result:any)=>{
      console.log(result);
      if(result){//如果服务器端返回的result有有效值，保存数据
        this.carouselItems=result.carouselItems;
        this.myMenuItems=result.myMenuItems;
      }
    })
  }

  jumpToSearch(){
     this.navCtrl.push(SearchMenuPage);
  }
  jumpToMenuList(lid){
    this.navCtrl.push(MenuListPage);
  }

}
