import { Routes } from "@angular/router";
import { ListaUsuariosComponent } from "./components/lista-usuarios/lista-usuarios.component";
import { CadastroEsportesComponent } from "./components/cadastro-esportes/cadastro-esportes.component";
import { LoginComponent } from "./components/login/login.component";

export const ROUTES: Routes = [
    {
        path:'listausuarios',
        component:ListaUsuariosComponent
    },
    {
        path:'cadastrar-esporte',
        component:CadastroEsportesComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
]