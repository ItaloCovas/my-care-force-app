import { api } from "../api";

export async function createApplication({
  shiftId,
  userId,
}: {
  shiftId: string;
  userId: string;
}) {
  const data = await api.post("applications", {
    shiftId,
    userId,
  });

  return data.data;
}
