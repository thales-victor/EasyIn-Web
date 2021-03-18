import { ApiResponse, HttpStatus } from "../../../interfaces/api/ApiResponse";
import { DadosAutenticacao } from "../../../interfaces/autenticacao/DadosAutenticacao";
import { SaveAuthentication, RemoveAuthentication } from "../../localStorage/LocalStorageService";
import { post } from "../ApiBase";

export async function Login(usuario: string, password: string): Promise<boolean> {
  RemoveAuthentication();

  var params = {
    username: usuario,
    password: password
  };
  let result: ApiResponse<DadosAutenticacao> = await post<any, DadosAutenticacao>("api/login", params);
  if (result.status === HttpStatus.OK) {
    SaveAuthentication(result.data);
    return true;
  }
  return false;
}

export async function Register(name: string, email: string, password: string, confirmPassword: string): Promise<boolean> {
  RemoveAuthentication();

  var params = {
    username: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };
  let result: ApiResponse<DadosAutenticacao> = await post<any, DadosAutenticacao>("api/user", params);
  return result.status === HttpStatus.OK;
}

export async function RecoverPassword(email: string): Promise<boolean> {
  RemoveAuthentication();

  var params = {
    email: email
  };
  let result: ApiResponse<DadosAutenticacao> = await post<any, DadosAutenticacao>("api/user/ForgotPassword", params);
  return result.status === HttpStatus.OK;
}