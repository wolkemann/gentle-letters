import { BentoDemo } from "@/components/dashboard/BentoDemo";

import Window from "@/components/ui/window";

export default async function Dashboard() {
  return (
    <main>
      <section className="md:p-5 w-full ">
        <Window borderless>
          <BentoDemo />
        </Window>
      </section>
    </main>
  );
}
