import { HttpStatus } from "../../HttpStatus";
import { get } from "../ApiBase";

const baseUrl = "api/platform";

export async function GetAllPlatforms() {
  let result = await get(baseUrl);
  if (result.status === HttpStatus.OK)
    return result.data;
}