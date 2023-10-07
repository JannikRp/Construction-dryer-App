import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    authStatus = false;
    constructor (
       private authentication: AuthenticationService, private router: Router) {
        this.authentication.authenticationChange.subscribe(authStatus => {
            this.authStatus = authStatus;
        })

        }

       async canActivate(): Promise<boolean> {
        try {
          if(this.authStatus) return true
          else{
            this.router.navigate(['/login']);   
            return false
          }
        } catch (error) {
          this.router.navigate(['/login']);  
          return false 
        }
       }
       
  
  }