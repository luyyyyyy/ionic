import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { ClassifyPage } from '../classify/classify'
import { UserCenterPage } from '../user-center/user-center'


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  indexPage;
  userCenterPage;
  classifyPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.indexPage=IndexPage;
     this.userCenterPage=UserCenterPage;
     this.classifyPage=ClassifyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
