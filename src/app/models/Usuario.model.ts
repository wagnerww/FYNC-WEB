import { StatusUsuario } from "../enums/status-usuario.enum";

export class ModelUsuario {
    constructor(
        public UsuCodigo:number,
        public UsuCPFCNPJ:string,
        public UsuEmail:string,
        public UsuSenha:string,
        public UsuStatus:StatusUsuario,
        public UsuNome:string,
        public UsuDtaRegistro:Date
    ){}
}
