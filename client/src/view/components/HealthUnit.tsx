import React, { HTMLAttributes } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Shift } from "../../shared/types/health-unit.type";

interface HealthUnitProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  shifts: Shift[];
}

export const HealthUnit = React.forwardRef<HTMLDivElement, HealthUnitProps>(
  ({ name, shifts, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`min-w-[300px] border-[#4062F9] border bg-white pb-4 pt-2 rounded-lg flex flex-col items-center justify-center cursor-pointer ${props.className}`}
      >
        <span>{name}</span>
        <MdOutlineHealthAndSafety className="text-[#4062F9] w-10 h-10 mt-4" />
      </div>
    );
  }
);