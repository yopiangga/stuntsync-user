import { LineChartComponent } from "src/components/chart/line-chart";
import { HeaderSection } from "src/components/header/header-section";
import { NavbarComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { StuntingStatus } from "src/components/stunting/stunting-status";

export function DashboardPage() {
  return (
    <div className="flex flex-col items-center">
      <NavbarComponent />

      <div className="w-11/12 mt-4">
        <p className="f-p2-sb text-blue-main">
          Track, Monitor, Ensure, Cherish, Grow
        </p>

        <div className="mt-4">
          <HeaderSection label="Stunting Status" />
        </div>

        <div className="mt-4">
          <StuntingStatus
            name={"Arya Putra"}
            // image={null}
            status={"stunting"}
            age={"2y, 2 month"}
          />
        </div>

        <div className="mt-6">
          <HeaderSection label="Stunting Insight" />
        </div>

        <div className="shadow-s1 rounded-xl bg-white flex p-4 items-center gap-4 mt-4">
          <p className="f-p2-r text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-6">
          <HeaderSection label="Growth Chart Overview" />
        </div>

        <div>
          <LineChartComponent />
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="fixed bottom-0 w-full">
        <BottomNavbarComponent />
      </div>
    </div>
  );
}
