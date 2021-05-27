import { HttpStatus } from "../../HttpStatus";
import { SaveAuthentication, RemoveAuthentication } from "../../localStorage/LocalStorageService";
import { post } from "../ApiBase";

export async function Login(usuario, password) {
  RemoveAuthentication();

  var params = {
    username: usuario,
    password: password
  };
  let result = await post("api/login", params);

  if (result.status === HttpStatus.OK) {
    SaveAuthentication(result.data);
    return true;
  }
  return false;
}

export async function QrCodeLogin(platformId, browserToken) {
  RemoveAuthentication();

  var params = {
    platformId: parseInt(platformId),
    browserToken: browserToken
  };
  let result = await post("api/login/qrcode", params);

  if (result.status === HttpStatus.OK) {
    SaveAuthentication(result.data);
    return true;
  }
  return false;
}

export async function Register(name, email, password, confirmPassword) {
  RemoveAuthentication();

  var params = {
    username: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };
  let result = await post("api/user", params);
  return result.status === HttpStatus.CREATED;
}

export async function RecoverPassword(email) {
  RemoveAuthentication();

  var params = {
    email: email
  };
  let result = await post("api/user/ForgotPassword", params);
  return result.status === HttpStatus.OK;
}