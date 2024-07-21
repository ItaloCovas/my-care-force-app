import { HealthUnit } from "../../types/health-unit.type";
import { api } from "../api";

export async function listHealthUnits() {
  const data = await api.get<HealthUnit[]>("health-unit");

  return data.data;
}
