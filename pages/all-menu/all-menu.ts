import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { MenuListPage } from '../menu-list/menu-list'

/**
 * Generated class for the AllMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-all-menu',
  templateUrl: 'all-menu.html',
})
export class AllMenuPage {
  myBackground="#f5f5f5";
  showType:boolean=true;
  allMenuClassifyItems:Array<any>=[];
  allMenuFoodItems:Array<any>=[];
  allMenuItems:Array<any>=[];

  constructor(private myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllMenuPage');
    this.loadData();
    this.getMenu(1,1);
  }

  loadData(){
    this.myHttp
    .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/product/all_menu.php')
    .subscribe((result:any)=>{
      console.log(result);
      this.allMenuClassifyItems=result.allMenuClassifyItems;
      this.allMenuFoodItems=result.allMenuFoodItems;
    })
  }
  getMenu(msg,num){
     console.log(msg,num);
     this.myHttp
     .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/product/all_menu.php?all_type='+num+'&type='+msg)
     .subscribe((result:any)=>{
       console.log(result);
       this.allMenuItems=result.allMenuItems;
     })
  }
  showClassify(){
     if(this.showType==false){
       this.showType=true;
     }
  }
  showFood(){
    if(this.showType==true){
      this.showType=false;
    }
  }

  jumpToList(){
    this.navCtrl.push(MenuListPage);
  }

}
