import { Application } from "../../types/application.type";
import { api } from "../api";

export async function listApplications() {
  const data = await api.get<Application[]>("applications/user");

  return data.data;
}
