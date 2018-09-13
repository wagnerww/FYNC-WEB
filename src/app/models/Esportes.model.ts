import { StatusEsporte } from "../enums/status-esporte.enum";

export class ModelEsportes {
    constructor(
        public EspCodigo:number,
        public EspDescricao:string,
        public EspStatus:StatusEsporte
    ){}
}
