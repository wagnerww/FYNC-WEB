import { Injectable } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

export function LoginSocialService() { 
    let config = new AuthServiceConfig(
        [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("349416252470822")
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("474834372995-nof4nh92d0rlse6p9lsk01f8cliob4jl.apps.googleusercontent.com")
          },
        ]
    );
    return config;
  }


