import * as Dialog from "@radix-ui/react-dialog";
import { ImSad } from "react-icons/im";
import { Shift } from "../../../shared/types/health-unit.type";
import { HealthUnit } from "../HealthUnit";
import { formatDate } from "../../../shared/utils/formatDate";
import { useShiftsDialog } from "./useShiftsDialog";
import { cn } from "../../../shared/utils/cn";
import { Spinner } from "../Spinner";

interface ShiftsDialogProps {
  name: string;
  shifts: Shift[];
  id: string;
}

export function ShiftsDialog({ name, shifts, id }: ShiftsDialogProps) {
  const {
    open,
    handleOpenChange,
    isShiftEligible,
    createApplication,
    createApplicationLoading,
    loadingShiftId,
    user,
  } = useShiftsDialog();

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <HealthUnit
          name={name}
          shifts={shifts}
          key={id}
          onClick={() => handleOpenChange(true)}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-100/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          {shifts.length > 0 ? (
            <>
              <Dialog.Title className="m-0 text-[17px] text-center font-medium">
                Aplicar a um turno
              </Dialog.Title>
              <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal text-center">
                Faça sua aplicação no turno desejado.
              </Dialog.Description>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <Dialog.Title />
              <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal text-center font-bold">
                Não há turnos disponíveis para esta unidade.
              </Dialog.Description>
              <ImSad className="text-[#4062F9] w-8 h-8" />
            </div>
          )}
          <div className="flex flex-col gap-y-4">
            {shifts.map((shift) => {
              const formattedStartDatetime = formatDate(shift.startDatetime);
              const formattedEndDatetime = formatDate(shift.endDatetime);
              const shiftClass = isShiftEligible(shift)
                ? "bg-[#4062F9]"
                : "bg-[#93A1F7] cursor-not-allowed";
              return (
                <div
                  key={shift.startDatetime}
                  onClick={
                    isShiftEligible(shift) && user
                      ? () => createApplication(shift.id, user?.id)
                      : undefined
                  }
                  className={cn(
                    "p-2 rounded-lg text-white flex cursor-pointer",
                    shiftClass,
                    createApplicationLoading &&
                      loadingShiftId === shift.startDatetime
                      ? "justify-center"
                      : "justify-between"
                  )}
                >
                  {createApplicationLoading &&
                  loadingShiftId === shift.startDatetime ? (
                    <Spinner />
                  ) : (
                    <>
                      <span>{formattedStartDatetime}</span>
                      <span>{formattedEndDatetime}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
