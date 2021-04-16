import { HttpStatus } from "../../HttpStatus";
import { get, post, put, remove } from "../ApiBase";

const baseUrl = "api/credential";

export async function GetAllCredentials() {
  let result = await get(baseUrl);
  if (result.status === HttpStatus.OK)
    return result.data;
}

export async function GetCredentialById(id) {
  let result = await get(baseUrl + "/" + id);
  if (result.status === HttpStatus.OK)
    return result.data;
}

export async function CreateCredential(platformId, username, password, confirmPassword) {
  var params = {
    platformId: parseInt(platformId),
    username: username,
    password: password,
    confirmPassword: confirmPassword
  }

  let result = await post(baseUrl, params);

  if (result.status === HttpStatus.CREATED)
    return result.data;
}

export async function UpdateCredential(id, username, password) {
  var params = {
    id: parseInt(id),
    username: username,
    password: password
  }

  let result = await put(baseUrl, params);

  if (result.status === HttpStatus.OK)
    return result.data;
}

export async function DeleteCredentialById(id) {
  let result = await remove(baseUrl + "/" + id);

  return result.status === HttpStatus.OK;
}