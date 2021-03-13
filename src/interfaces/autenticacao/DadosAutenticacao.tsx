import { Usuario } from "./Usuario";

export interface DadosAutenticacao {
    token: string;
    usuario: Usuario;
}