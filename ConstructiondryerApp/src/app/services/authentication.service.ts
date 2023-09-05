import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })

  
  export class AuthenticationService{

    private authenticationChange$ =new BehaviorSubject<boolean>(false)
    public authenticationChange = this.authenticationChange$.asObservable();


constructor(private navCtrl: NavController,) {
        
}

    login(username: string , password : string ){
        if (username === 'Jannik' && password === 'Jannik') {
            this.authenticationChange$.next(true);
            this.navCtrl.navigateRoot('/tabs');
        }
        else {
        throw new Error;
    }

    }
}