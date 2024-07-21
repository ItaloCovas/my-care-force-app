import { useContext } from "react";
import { ApplicationsContext } from "./ApplicationsContext";

export function useApplications() {
  return useContext(ApplicationsContext);
}
