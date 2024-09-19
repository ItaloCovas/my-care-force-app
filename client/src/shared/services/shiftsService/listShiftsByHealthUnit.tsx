import { Shift } from "../../types/health-unit.type";
import { api } from "../api";

export async function listShiftsByHealthUnit(id: string) {
  const data = await api.get<Shift[]>(`shift/${id}`);

  return data.data;
}
