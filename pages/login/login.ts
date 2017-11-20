import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { RegisterPage } from '../register/register'


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName:string="";
  userPwd:string="";

  constructor(public alertCtrl:AlertController, private myHttp:MyHttpService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  jumpToRegister(){
    this.navCtrl.push(RegisterPage);
  }

  toDoLogin(){
    this.myHttp
    .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/user/login.php?uname='+this.userName+"&upwd="+this.userPwd)
    .subscribe((result:any)=>{
      console.log(result);
      if(result){
        if(result.code==200){
          this.myHttp.showToast("登录成功");
          this.navCtrl.pop();
        }else if(result.code==201){
          this.myHttp.showToast("登录失败");
          this.userName="";
          this.userPwd="";
        }
      }
    })
  }

}
