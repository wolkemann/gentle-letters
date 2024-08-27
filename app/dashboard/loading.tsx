import HeartLoader from "@/components/ui/heart-loader";
import Window from "@/components/ui/window";

export default function DashboardLoading() {
  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <Window title="Loading">
          <HeartLoader />
        </Window>
      </section>
    </main>
  );
}
