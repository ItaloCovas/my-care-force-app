import { useEffect, useState } from "react";
import { HealthUnit } from "../../../shared/types/health-unit.type";
import { healthUnitService } from "../../../shared/services/healthUnitService";
import { Application } from "../../../shared/types/application.type";
import { applicationService } from "../../../shared/services/applicationService";

export function useDashboard() {
  const [healthUnits, setHealthUnits] = useState<HealthUnit[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [healthUnitsLoading, setHealthUnitsLoading] = useState<boolean>(false);
  const [applicationsLoading, setApplicationsLoading] =
    useState<boolean>(false);

  useEffect(() => {
    loadHealthUnits();
    loadApplications();
  }, []);

  async function loadHealthUnits() {
    try {
      setHealthUnitsLoading(true);
      // Pelo fato de rodar local e responder muito rápido, simular o loading por mais tempo
      setTimeout(() => {}, 2000);
      const healthUnitsRes = await healthUnitService.listHealthUnits();
      setHealthUnits(healthUnitsRes);
      setHealthUnitsLoading(false);
    } catch (e) {
      setHealthUnitsLoading(false);
    }
  }

  async function loadApplications() {
    try {
      setApplicationsLoading(true);
      // Pelo fato de rodar local e responder muito rápido, simular o loading por mais tempo
      setTimeout(() => {}, 2000);
      const applicationsRes = await applicationService.listApplications();
      setApplications(applicationsRes);
      setApplicationsLoading(false);
    } catch (e) {
      setApplicationsLoading(false);
    }
  }

  return {
    healthUnits,
    healthUnitsLoading,
    applications,
    applicationsLoading,
  };
}
