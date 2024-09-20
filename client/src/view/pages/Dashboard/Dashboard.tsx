import { ApplicationsProvider } from "../../../shared/context/ApplicationsContext/ApplicationsContext";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";

export function Dashboard() {
  return (
    <ApplicationsProvider>
      <main className="h-screen bg-zinc-50 dark:bg-zinc-800 select-none">
        <Header />
        <section className="py-10 px-5 w-full">
          <Tabs />
        </section>
      </main>
    </ApplicationsProvider>
  );
}
