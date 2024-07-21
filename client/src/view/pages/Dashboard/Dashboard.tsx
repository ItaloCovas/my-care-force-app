import { ApplicationsProvider } from "../../../shared/context/ApplicationsContext/ApplicationsContext";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";
import { useDashboard } from "./useDashboard";

export function Dashboard() {
  const { healthUnits, healthUnitsLoading } = useDashboard();

  return (
    <ApplicationsProvider>
      <main className="h-screen bg-zinc-50">
        <Header />
        <section className="py-10 px-5 w-full">
          <Tabs
            healthUnits={healthUnits}
            healthUnitsLoading={healthUnitsLoading}
          />
        </section>
      </main>
    </ApplicationsProvider>
  );
}
