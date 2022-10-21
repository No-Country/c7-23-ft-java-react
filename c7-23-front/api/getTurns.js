import { MyTurnAPI } from "../config";

export default async function getTurns() {
  const { data: turns } = await MyTurnAPI.get("/turns");
  return turns;
}
