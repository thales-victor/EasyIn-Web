import { HttpStatus } from "../../HttpStatus";
import { get, put } from "../ApiBase";

export async function GetUserInfo() {
  let result = await get("api/user");
  if (result.status === HttpStatus.OK)
    return result.data;
}

export async function UpdateUser(username, email, oldPassword, newPassword, confirmNewPassword) {
  var params = {
    username: username,
    email: email,
    oldPassword: oldPassword,
    newPassword: newPassword,
    confirmNewPassword: confirmNewPassword
  }
  
  let result = await put("api/user", params);

  if (result.status === HttpStatus.OK)
    return result.data;
}