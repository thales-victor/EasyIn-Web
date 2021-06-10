import { HttpStatus } from "../../HttpStatus";
import { get, post, put, remove } from "../ApiBase";

const baseUrl = "api/credential/GeneratePassword";

export async function GenerateRandomPassword(passwordSize, useLowerCase, useUpperCase, useNumbers, useSpecial) {
  let params = {
    passwordSize,
    useLowerCase,
    useUpperCase,
    useNumbers,
    useSpecial
  }
  
  let result = await get(baseUrl, params);

  if (result.status === HttpStatus.OK)
    return result.data;
}