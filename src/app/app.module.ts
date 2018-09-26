import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTES} from './app.router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuariosService } from './services/Usuarios.service';
import { EsportesService } from './services/esportes.service';
import { CadastroEsportesComponent } from './components/cadastro-esportes/cadastro-esportes.component';
import { RadioButtonComponent } from './components/Forms-shared/radio-button/radio-button.component';
import { EnumTransformPipe } from './pipes/enum-transform.pipe';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule, AuthServiceConfig} from "angular5-social-login";
import { LoginSocialService } from './services/login/login-social.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FooterComponent,
    ListaUsuariosComponent,
    CadastroEsportesComponent,
    RadioButtonComponent,
    EnumTransformPipe,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [ UsuariosService, EsportesService,
    {
      provide:AuthServiceConfig,
      useFactory: LoginSocialService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
