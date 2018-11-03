import { Component, OnInit } from '@angular/core';
import {  AuthService,  FacebookLoginProvider,  GoogleLoginProvider} from 'angular5-social-login';
import { UsuariosService } from '../../services/Usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private userService:UsuariosService) { }

  ngOnInit() {
  }

  LoginGoole(){  
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
        console.log(" sign in data : " , userData);
        this.userService.SocialLogin(userData);
      });
  }

  LoginFacebook(){  
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
        console.log(" sign in data FB : " , userData); 
        this.userService.SocialLogin(userData);           
      });
  }
}
