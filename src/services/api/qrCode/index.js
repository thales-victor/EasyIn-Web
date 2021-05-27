import { HttpStatus } from "../../HttpStatus";
import { post } from "../ApiBase";

const baseUrl = "api/QrCode";

export async function CreateQrCodeLogin(platformId, browserToken) {
  let params = {
    platformId: parseInt(platformId),
    browserToken
  }
  let result = await post(baseUrl + '/Login', params);

  if (result.status === HttpStatus.OK)
    return result.data;
}