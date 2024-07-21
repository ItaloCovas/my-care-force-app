import { useState } from "react";
import { Shift } from "../../../shared/types/health-unit.type";

export function useShiftsDialog() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const isShiftEligible = (shift: Shift) => {
    const now = new Date();
    const start = new Date(shift.startDatetime);
    const end = new Date(shift.endDatetime);
    return now < start && now < end;
  };

  return {
    open,
    handleOpenChange,
    isShiftEligible,
  };
}
