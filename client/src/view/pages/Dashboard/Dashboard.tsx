import { Header } from "../../components/Header";
import { useDashboard } from "./useDashboard";

export function Dashboard() {
  const { healthUnits } = useDashboard();

  console.log(healthUnits);
  return (
    <main>
      <Header />
    </main>
  );
}
