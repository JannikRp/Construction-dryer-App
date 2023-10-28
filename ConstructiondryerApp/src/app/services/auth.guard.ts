import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    authStatus = false;
    constructor (
      private authentication: AuthenticationService, private router: Router) { }
      async canActivate(): Promise<boolean> {
       try {
         if(await this.authentication.isUserAuthenticated()) return true
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