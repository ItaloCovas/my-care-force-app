import { useEffect, useState } from "react";
import { Application } from "../../../shared/types/application.type";
import { applicationService } from "../../../shared/services/applicationService";

export function useDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [applicationsLoading, setApplicationsLoading] =
    useState<boolean>(false);

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    try {
      setApplicationsLoading(true);
      // Pelo fato de rodar local e responder muito rápido, simular o loading por mais tempo
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const applicationsRes = await applicationService.listApplications();
      setApplications(applicationsRes);
      setApplicationsLoading(false);
    } catch (e) {
      setApplicationsLoading(false);
    }
  }

  return {
    applications,
    applicationsLoading,
  };
}
