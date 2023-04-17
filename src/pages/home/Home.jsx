import { NavLink } from "react-router-dom";
import DashboardCard10 from "./DashboardCard10";
import DashboardCard11 from "./DashboardCard11";
function Home() {
  return (
    <main>
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <NavLink
            to="device/monitor"
            className="text-lg font-medium text-indigo-500 hover:text-indigo-600"
          >
            기기 모니터링 바로가기
          </NavLink>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card (Recent Activity) */}
          {/* <DashboardCard10 /> */}
          {/* Card (Income/Expenses) */}
          {/* <DashboardCard11 /> */}
        </div>
      </div>
    </main>
  );
}

export default Home;
