import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {


  constructor(private authentication: AuthenticationService) {
      
  }
  ngOnInit(): void {
      
  }
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    this.authentication.CreateAccount(this.user.email, this.user.password);
  }

}
