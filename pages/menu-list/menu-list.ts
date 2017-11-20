import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { StepPage } from '../step/step'

/**
 * Generated class for the MenuListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {
  listImg:Array<any>=[];
  
  constructor(private myHttp:MyHttpService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuListPage');
    this.loadList();
  }

  //当下拉到一定程度之后 松手就会触发ionRefresh事件，调用该方法
  doRefresh(refresher){
    console.log('ionRefresh事件已经被触发了');
    console.log(refresher);
    //完成数据的获取和操作
    //通知ionic框架  结束刷新动作

    setTimeout(()=>{
      this.listImg.unshift();
      //调用事件函数中$event所传递过来的对象中的complete方法来通知ionic框架，可以结束刷新动作
      refresher.complete();
    },3000);
  }

  loadList(){
    this.myHttp
    .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/product/menu_list.php')
    .subscribe((result:any)=>{
      console.log(result);
      this.listImg=result.menuListItems;
    })
  }

  loadMore(infiniteScroll){
    setTimeout(()=>{
      this.listImg.push();
      infiniteScroll.complete();
    },1000)
  }

  jumpToStep(){
    this.navCtrl.push(StepPage);
  }

}
