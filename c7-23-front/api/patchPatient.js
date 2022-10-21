import { MyTurnAPI } from "../config";

export default async function patchPatient(id, updatedUserData) {
  return await MyTurnAPI.patch(`/patient/update?id=${id}`, updatedUserData);
}
