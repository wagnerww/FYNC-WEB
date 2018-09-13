export class ModelUsuario {
    constructor(
        public UsuCodigo:number,
        public UsuCPFCNPJ:string,
        public UsuEmail:string,
        public UsuSenha:string,
        public UsuStatus:number,
        public UsuNome:string,
        public UsuDtaRegistro:Date
    ){}
}
