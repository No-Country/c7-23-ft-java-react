import { MyTurnAPI } from "../config";

export default async function patchTurn(id) {
  return await MyTurnAPI.patch(`/turn/update?id=${id}`);
}
