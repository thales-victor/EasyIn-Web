import { HttpStatus } from "../../HttpStatus";
import { post } from "../ApiBase";

const baseUrl = "api/QrCode";

export async function CreateQrCodeLogin(platformId, browserToken, credentialId) {
  let params = {
    platformId: parseInt(platformId),
    browserToken,
    credentialId: credentialId ? parseInt(credentialId) : 0
  }
  let result = await post(baseUrl + '/Login', params);
  if (result.status === HttpStatus.CREATED) {
    return { credentials: [] }
  }
  if (result.status === HttpStatus.ACCEPTED) {
    return result.data;
  }
}