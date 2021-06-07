import { HttpStatus } from "../../HttpStatus";
import { get } from "../ApiBase";

const baseUrl = "api/history";

export async function GetLoginHistory() {
  let result = await get(baseUrl);
  if (result.status === HttpStatus.OK || result.status === HttpStatus.NO_CONTENT) {
    return result.data;
  }
}