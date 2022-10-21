import { MyTurnAPI } from "../config";

export default async function postTurnToPatient({ idTurn, idPatient }) {
  const { data } = await MyTurnAPI.post(
    `/turn/addpatient?turn_id=${idTurn}1&patient_id=${idPatient}`
  );
  return data;
}
