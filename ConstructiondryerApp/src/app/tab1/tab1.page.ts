import { Component } from '@angular/core';
import {  NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: ToastController, private navCtrl: NavController, ) {


    
  }

  async selectOption(option: string) {
  switch (option) {
    case 'Anleitung':
      this.navCtrl.navigateRoot('/instructions');
      break;

      case 'Trockner aufstellen':
      break;

      case 'Trockner abholen':
        var alert = await this.alertController.create({
          message: 'Noch nicht implementiert',
          duration: 2000,
          color: 'danger'
            });

        alert.present();
      break;

      case 'Messprotokoll erstellen':
      var alert = await this.alertController.create({
        message: 'Noch nicht implementiert',
        duration: 2000,
        color: 'danger'
          });
      alert.present();
      break;
      case 'Einstellungen':
      var alert = await this.alertController.create({
        message: 'Noch nicht implementiert',
        duration: 2000,
        color: 'danger'
          });
      alert.present();
      break;
    default:
      break;
  }
  }
}
