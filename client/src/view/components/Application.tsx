import { formatDate } from "../../shared/utils/formatDate";
import { FaRegHospital } from "react-icons/fa";

interface ApplicationProps {
  healthUnitName: string;
  startDatetime: string;
  endDatetime: string;
}

export function Application({
  healthUnitName,
  startDatetime,
  endDatetime,
}: ApplicationProps) {
  const formattedStartDatetime = formatDate(startDatetime);
  const formattedEndDatetime = formatDate(endDatetime);

  return (
    <div className="flex max-w-[400px] flex-col items-start rounded-lg pb-4 pt-2 px-4 bg-white border-[#4062F9] border">
      <span className="font-bold text-[#4062F9] flex gap-x-2">
        <FaRegHospital className="mt-[2.5px]" /> {healthUnitName}
      </span>
      <div className="flex flex-col gap-y-2 mt-5 text-left">
        <span>
          De: <strong className="font-medium">{formattedStartDatetime}</strong>
        </span>
        <span>
          Até: <strong className="font-medium">{formattedEndDatetime}</strong>
        </span>
      </div>
    </div>
  );
}
