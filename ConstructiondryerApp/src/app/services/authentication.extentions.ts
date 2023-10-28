import { User } from "@angular/fire/auth";
import { JwtHelperService } from '@auth0/angular-jwt';

export class AuthenticationExtensions {

     isAccessTokenAvailable() {
		const accesstoken = window.localStorage.getItem('accessToken.ConstructionDryerApp')
        if(accesstoken)
            return true;
        else
        return false;
    }
	isAccessTokenExpired() {
		const accesstoken = window.localStorage.getItem('accessToken.ConstructionDryerApp');
        const jwtHelper = new JwtHelperService();
        return jwtHelper.isTokenExpired(accesstoken)

	}
	clearStorage() {
		throw new Error('Method not implemented.');
	}

	 safeUserInformation(authResponse: any) {
		 window.localStorage.setItem('accessToken.ConstructionDryerApp',authResponse.user.accessToken);
    }
}