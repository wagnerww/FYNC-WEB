import { ModelEsportes } from "../models/Esportes.model";

export interface InterfaceEsportes {
    status:Number,
    mensagem:String,
     retornos: {
      data: ModelEsportes[]
  }
}
