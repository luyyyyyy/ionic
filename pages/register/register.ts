import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { LoginPage } from '../login/login'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userRegister:boolean=true;
  phoneRegister:boolean=false;
  userName:string="";
  upwd:string="";
  userEmail:string="";
  userPhone:string="";

  constructor(public alertCtrl:AlertController, private myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  showUser(){
    this.userRegister=true;
    this.phoneRegister=false;
  }
  showPhone(){
    this.userRegister=false;
    this.phoneRegister=true;
  }

  toDoRegister(){
    this.myHttp
    .sendRequest('http://127.0.0.1/shangkelianxi/webApp/data/user/register.php?uname='+this.userName+"&upwd="+this.upwd+"&email="+this.userEmail+"&phone="+this.userPhone)
    .subscribe((result:any)=>{
      console.log(result);
      if(result){
        if(result.code==200){
          this.showAlert();
        }else if(result.code==500){
          this.myHttp.showToast("注册失败");
          this.userName="";
          this.upwd="";
          this.userEmail="";
          this.userPhone="";
        }
      }
    })
  }

  jumpToLogin(){
    this.navCtrl.push(LoginPage);
  }
  showAlert(){
    this.alertCtrl.create({
      message:'注册成功',
      buttons:[
        {
          text:'确定',
          handler:()=>{
            this.navCtrl.pop();
          }
        }
      ]
    }).present();
  }

}
