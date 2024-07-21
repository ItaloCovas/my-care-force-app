import { MdOutlineHealthAndSafety } from "react-icons/md";

import { Shift } from "../../shared/types/health-unit.type";

interface HealthUnitProps {
  name: string;
  shifts: Shift[];
}

export function HealthUnit({ name }: HealthUnitProps) {
  return (
    <div className="min-w-[300px] border-[#4062F9] border bg-white pb-4 pt-2 rounded-lg flex flex-col items-center justify-center cursor-pointer">
      <span>{name}</span>
      <MdOutlineHealthAndSafety className="text-[#4062F9] w-10 h-10 mt-4" />
      {/* {shifts.map((shift) => {
        return <div>{shift.startDatetime}</div>;
      })} */}
    </div>
  );
}
