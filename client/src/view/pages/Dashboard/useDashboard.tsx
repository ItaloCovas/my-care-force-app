import { useEffect, useState } from "react";
import { HealthUnit } from "../../../shared/types/health-unit.type";
import { healthUnitService } from "../../../shared/services/healthUnitService";

export function useDashboard() {
  const [healthUnits, setHealthUnits] = useState<HealthUnit[]>([]);
  const [healthUnitsLoading, setHealthUnitsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadHealthUnits();
  }, []);

  async function loadHealthUnits() {
    try {
      setHealthUnitsLoading(true);
      const healthUnitsRes = await healthUnitService.listHealthUnits();
      setHealthUnits(healthUnitsRes);
      setHealthUnitsLoading(false);
    } catch (e) {
      setHealthUnitsLoading(false);
    }
  }

  return {
    healthUnits,
    healthUnitsLoading,
  };
}
