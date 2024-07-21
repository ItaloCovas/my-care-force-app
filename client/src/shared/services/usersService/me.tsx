import { User } from "../../types/user.type";
import { api } from "../api";

export async function me() {
  const data = await api.get<User>("users/me");

  return data.data;
}
