export interface HealthUnit {
  id: string;
  name: string;
  Shifts: Shift[];
}

export interface Shift {
  id: string;
  healthUnitId: string;
  startDatetime: string;
  endDatetime: string;
}
