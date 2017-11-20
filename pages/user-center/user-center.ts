import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { LoginPage } from '../login/login'

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {
  userName:string="";
  userPwd:string="";


  constructor(public alertCtrl:AlertController, private myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }
  jumpToLogin(){
    this.navCtrl.push(LoginPage);
  }
}
