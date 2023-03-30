import DashboardCard10 from "./DashboardCard10"
import DashboardCard11 from "./DashboardCard11"
function Home() {
  return (
    <main>
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card (Recent Activity) */}
        <DashboardCard10 />   
        {/* Card (Income/Expenses) */}
        <DashboardCard11 />
        
      </div>
    </div>
  </main>
  );
}

export default Home;
