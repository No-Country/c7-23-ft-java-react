import { MyTurnAPI } from "../config";

export default async function patchDoctor(id) {
  return await MyTurnAPI.patch(`/doctor/update?id=${id}`);
}
