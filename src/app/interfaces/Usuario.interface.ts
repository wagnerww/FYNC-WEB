import { ModelUsuario } from "../models/Usuario.model";

export interface InterfaceUsuario{
    status:Number, 
      mensagem:String,
       retornos: {
        data: ModelUsuario[]
    }
};
