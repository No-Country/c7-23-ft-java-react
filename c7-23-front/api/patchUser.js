import { MyTurnAPI } from "../config";

export default async function patchUser(userId, updatedUserData) {
  const { data } = await MyTurnAPI.patch(
    `/user/update?id=${userId}`,
    updatedUserData
  );
  return data;
}
