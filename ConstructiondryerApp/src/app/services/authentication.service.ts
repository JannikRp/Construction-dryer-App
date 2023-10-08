import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';
import { ExceptionCode } from '@capacitor/core';
import { FirebaseError } from '@angular/fire/app';


@Injectable({
    providedIn: 'root',
  })

  
  export class AuthenticationService{

    private authenticationChange$ =new BehaviorSubject<boolean>(false)
    public authenticationChange = this.authenticationChange$.asObservable();


constructor(private navCtrl: NavController, private auth: Auth) {
        
}

   async login(username: string , password : string ){
        try {
			const user = await signInWithEmailAndPassword(this.auth, username, password)
			this.authenticationChange$.next(true);
			this.navCtrl.navigateRoot('/tabs');
			return user;
		} catch (e) {
			console.log 
			throw (e);
		} 
	}


    async CreateAccount(username: string , password : string) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, username, password)
            this.navCtrl.navigateRoot('/tabs')
			return user;
		} catch (e) {
			throw e;
		}
	}

    }
