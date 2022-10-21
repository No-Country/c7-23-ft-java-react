import { MyTurnAPI } from "../config";

export default async function getDoctors() {
  const { data: doctors } = await MyTurnAPI.get("/doctors");
  return doctors;
}
