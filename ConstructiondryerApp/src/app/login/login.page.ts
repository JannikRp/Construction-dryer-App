import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController,  private authentication: AuthenticationService) {}

  login() {
    
    try{
      this.authentication.login(this.username, this.password)

    }catch{
      this.presentToastOnLoginFailed();      
      console.log('Anmeldung fehlgeschlagen');
    }
  }

  NavigateToSignUp(){
    this.navCtrl.navigateRoot('/sign-up');
  }


  
  async presentToastOnLoginFailed() {
    const toast = await this.toastController.create({
      message: 'Nutzer oder Password falsch!',
      duration: 1500,
      color: 'Danger',
    });
    toast.present();
  }
}
