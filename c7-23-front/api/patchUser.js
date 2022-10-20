import { MyTurnAPI } from "../config";

export default async function patchUser(id) {
  return await MyTurnAPI.patch(`/user/update?id=${id}`);
}
