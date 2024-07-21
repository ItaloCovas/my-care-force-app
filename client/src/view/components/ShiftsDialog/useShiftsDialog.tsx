/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Shift } from "../../../shared/types/health-unit.type";
import { applicationService } from "../../../shared/services/applicationService";
import { User } from "../../../shared/types/user.type";
import { usersService } from "../../../shared/services/usersService";
import toast from "react-hot-toast";

export function useShiftsDialog() {
  const [open, setOpen] = useState(false);
  const [createApplicationLoading, setCreateApplicationLoading] =
    useState<boolean>(false);
  const [loadingShiftId, setLoadingShiftId] = useState<string | null>(null);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    loadUserId();
  }, []);

  function handleOpenChange(isOpen: boolean) {
    setOpen(isOpen);
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
      handleOpenChange(false);
      toast.error("Você aplicou ao turno com sucesso. Parabéns!");
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
  };
}
