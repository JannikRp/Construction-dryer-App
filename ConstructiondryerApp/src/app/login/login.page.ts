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

  constructor( private toastController: ToastController,  private authentication: AuthenticationService) {}

  login() {
    // Hier kannst du deine Anmeldelogik implementieren
    
    try{
      this.authentication.login(this.username, this.password); 
    }catch{
      this.presentToastOnLoginFailed();      
      console.log('Anmeldung fehlgeschlagen');
      // Hier könntest du eine Fehlermeldung anzeigen oder andere Aktionen ausführen
    }
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
