/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Shift } from "../../../shared/types/health-unit.type";
import { applicationService } from "../../../shared/services/applicationService";
import { User } from "../../../shared/types/user.type";
import { usersService } from "../../../shared/services/usersService";
import toast from "react-hot-toast";
import { useApplications } from "../../../shared/context/ApplicationsContext/useApplications";
import { shiftsService } from "../../../shared/services/shiftsService";

interface UseShiftsDialogProps {
  id: string;
}

export function useShiftsDialog({ id }: UseShiftsDialogProps) {
  const [open, setOpen] = useState(false);
  const [createApplicationLoading, setCreateApplicationLoading] =
    useState<boolean>(false);
  const [loadingShiftId, setLoadingShiftId] = useState<string | null>(null);
  const [user, setUser] = useState<User>();
  const [shifts, setShifts] = useState<Shift[]>();
  const [shiftsLoading, setShiftsLoading] = useState<boolean>(false);
  const { refreshApplications } = useApplications();

  useEffect(() => {
    loadUserId();
  }, []);

  // prolly callback
  function handleOpenChange(isOpen: boolean) {
    if (isOpen) {
      loadShiftsByHealthUnit(id);
    } else {
      setShifts([]);
    }
    setOpen(isOpen);
  }

  async function loadShiftsByHealthUnit(id: string) {
    try {
      setShiftsLoading(true);
      // Pelo fato de rodar local e responder muito rápido, simular o loading por mais tempo
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const shiftsRes = await shiftsService.listShiftsByHealthUnit(id);
      setShifts(shiftsRes);
      setShiftsLoading(false);
    } catch (e) {
      setShiftsLoading(false);
    }
  }

  function isShiftEligible(shift: Shift) {
    const now = new Date();
    const start = new Date(shift.startDatetime);
    const end = new Date(shift.endDatetime);
    return now < start && now < end;
  }

  async function createApplication(shiftId: string, userId: string) {
    try {
      setCreateApplicationLoading(true);
      setLoadingShiftId(shiftId);
      await applicationService.createApplication({ shiftId, userId });
      setCreateApplicationLoading(false);
      refreshApplications();
      handleOpenChange(false);
      toast.success("Você aplicou ao turno com sucesso. Parabéns!");
    } catch (e: any) {
      setCreateApplicationLoading(false);
      handleOpenChange(false);
      if (
        e.response.data.message === "User is already registered for this shift."
      ) {
        toast.error("Você já fez uma aplicação neste turno.");
      } else {
        toast.error("Falha ao aplicar no turno. Tente novamente.");
      }
    } finally {
      setCreateApplicationLoading(false);
      setLoadingShiftId(null);
    }
  }

  async function loadUserId() {
    try {
      const user = await usersService.me();
      setUser(user);
    } catch {
      toast.error("Falha ao obter o usuário, tente novamente.");
    }
  }

  return {
    open,
    handleOpenChange,
    isShiftEligible,
    createApplication,
    createApplicationLoading,
    loadingShiftId,
    user,
    shifts,
    shiftsLoading,
  };
}
