import { DashboardPanel } from "@/components/dashboard/DashboardPanel";
import Window from "@/components/ui/window";

export default async function Dashboard() {
  return (
    <main>
      <section className="w-full">
        <Window borderless>
          <DashboardPanel />
        </Window>
      </section>
    </main>
  );
}
