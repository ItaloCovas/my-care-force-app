import { HealthUnit } from "../../types/health-unit.type";
import { api } from "../api";

interface ListHealthUnitsProps {
  limit: number;
  page: number;
}

export async function listHealthUnits({
  limit = 10,
  page = 1,
}: ListHealthUnitsProps) {
  const data = await api.get<HealthUnit[]>(
    `health-unit?limit=${limit}&page=${page}`
  );

  return data.data;
}
