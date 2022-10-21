import { MyTurnAPI } from "../config";

export default async function postTurnToTurn({ body, turn_id, patient_id }) {
  const { data } = await MyTurnAPI.post(
    `/turn/addpatient?turn_id=${turn_id}1&patient_id=${patient_id}`,
    body
  );
  return data;
}
