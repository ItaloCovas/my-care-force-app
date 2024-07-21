import { createContext, useState, useEffect } from "react";
import { Application } from "../../../shared/types/application.type";
import { applicationService } from "../../../shared/services/applicationService";

export interface ApplicationsContextType {
  applications: Application[];
  applicationsLoading: boolean;
  refreshApplications: () => void;
}

export const ApplicationsContext = createContext({
  applications: [],
  applicationsLoading: false,
  refreshApplications: () => {},
} as ApplicationsContextType);

export const ApplicationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);

  const fetchApplications = async () => {
    setApplicationsLoading(true);
    // Simulate a loading delay for local development
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const applicationsRes = await applicationService.listApplications();
    setApplications(applicationsRes);
    setApplicationsLoading(false);
  };

  const refreshApplications = () => {
    fetchApplications();
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <ApplicationsContext.Provider
      value={{ applications, applicationsLoading, refreshApplications }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};
