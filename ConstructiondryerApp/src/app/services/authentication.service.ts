import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from '@angular/fire/auth';

import { AuthenticationExtensions } from './extensions/authentication.extentions';


@Injectable({
    providedIn: 'root',
  })

  
  export class AuthenticationService extends AuthenticationExtensions {

    private authenticationChange$ =new BehaviorSubject<boolean>(false)
    public authenticationChange = this.authenticationChange$.asObservable();


constructor(private navCtrl: NavController, private auth: Auth) {
	super();
}

   async login(username: string , password : string ){
        try {
			 await signInWithEmailAndPassword(this.auth, username, password).then(async authResponse =>{
				this.safeUserInformation(authResponse);
			})
			this.authenticationChange$.next(true);
			this.navCtrl.navigateRoot('/tabs');
		} catch (e) {
			console.log 
			throw (e);
		} 
	}
	


    async createAccount(username: string , password : string) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, username, password)
            this.navCtrl.navigateRoot('/tabs')
			return user;
		} catch (e) {
			throw e;
		}
	}

	async isUserAuthenticated(): Promise<boolean> {
		if (this.isAccessTokenAvailable())
		{
		  if (!await this.isAccessTokenExpired()) {
			if (navigator.onLine) {
			  // Token is expired, but we have a connection so we will attempt to refresh the token
			  try {
				//await this.refreshSession();
				this.authenticationChange$.next(true);
				return true;
			  } catch (e) {
				// Refresh failed, clear the storage
				await this.clearStorage();
				this.authenticationChange$.next(false);
				return false;
			  }
			} else {
			  // Token is expired, but no connection. We will check for the presence
			  // of a refresh token, and if it exists, we will assume the login is still valid
			  //return !!(await this.getRefreshToken());
			  this.authenticationChange$.next(false);
			  return false 
			}
		}else{
		 return true
		}
		} else {
		  // Access token is not expired, authentication is valid
		  this.authenticationChange$.next(false);
		  return false;
		  
		}
	  }
	

    }
