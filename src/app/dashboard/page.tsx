import Map from "@/app/_components/Map";
import Sidebar from "@/app/_components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Map />
      </div>
    </div>
  );
}
