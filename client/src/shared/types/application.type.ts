import { HealthUnit } from "./health-unit.type";

export interface Application {
  id: string;
  shiftId: string;
  userId: string;
  shift: Shift;
  user: User;
}

export interface Shift {
  id: string;
  healthUnitId: string;
  startDatetime: string;
  endDatetime: string;
  healthUnit: Partial<HealthUnit>;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
