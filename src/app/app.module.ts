import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTES} from './app.router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FooterComponent,
    ListaUsuariosComponent,
    CadastroEsportesComponent,
    RadioButtonComponent,
    EnumTransformPipe
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuariosService, EsportesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
