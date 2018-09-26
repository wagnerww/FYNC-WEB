import { Component, OnInit } from '@angular/core';
import {  AuthService,  FacebookLoginProvider,  GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(, private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  socialSignIn(){  
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
        console.log(" sign in data : " , userData);            
      });
  }

  socialSignInFacebook(){  
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
        console.log(" sign in data FB : " , userData);            
      });
  }
}
