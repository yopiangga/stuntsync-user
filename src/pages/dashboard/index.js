import { useContext, useEffect, useState } from "react";
import { LineChartComponent } from "src/components/chart/line-chart";
import { HeaderSection } from "src/components/header/header-section";
import { InputSelect } from "src/components/input/input-select";
import { NavbarComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { StuntingStatus } from "src/components/stunting/stunting-status";
import { UserContext } from "src/context/UserContext";
import { MonitoringServices } from "src/services/MonitoringServices";
import { MALE_GRAPH } from "src/constant/male-graph";
import { FEMALE_GRAPH } from "src/constant/female-graph";
import { INSIGHT_CATEGORY_STUNTING } from "src/constant/insight-category-stunting";
import { FaRegSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const navigate = useNavigate();
  const monitoringServices = new MonitoringServices();

  const { user } = useContext(UserContext);

  const [monitorings, setMonitorings] = useState([]);
  const [selectedBaby, setSelectedBaby] = useState();

  useEffect(() => {
    if (user.baby.length > 0) fetchMonitoring({ babyId: user.baby[0].id });
  }, []);

  async function fetchMonitoring({ babyId }) {
    const baby = user.baby.find((baby) => baby.id == babyId);
    const res = await monitoringServices.MonitoringByBabyId({ babyId });

    if (res) {
      setMonitorings(res.data);
      const dob = new Date(baby.dob);
      const age = Math.floor(
        (new Date().getTime() - dob.getTime()) / (1000 * 3600 * 24 * 30)
      );

      if (res.data.length > 0) {
        if (baby.gender == "male") {
          if (MALE_GRAPH[age].min3sd > res.data[res.data.length - 1].height) {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "danger",
              insight: INSIGHT_CATEGORY_STUNTING[0],
            });
          } else if (
            MALE_GRAPH[age].min2sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "danger",
              insight: INSIGHT_CATEGORY_STUNTING[1],
            });
          } else if (
            MALE_GRAPH[age].min1sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "warning",
              insight: INSIGHT_CATEGORY_STUNTING[2],
            });
          } else {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "normal",
              insight: INSIGHT_CATEGORY_STUNTING[3],
            });
          }
        } else {
          if (FEMALE_GRAPH[age].min3sd > res.data[res.data.length - 1].height) {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "danger",
              insight: INSIGHT_CATEGORY_STUNTING[0],
            });
          } else if (
            MALE_GRAPH[age].min2sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "danger",
              insight: INSIGHT_CATEGORY_STUNTING[1],
            });
          } else if (
            MALE_GRAPH[age].min1sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "warning",
              insight: INSIGHT_CATEGORY_STUNTING[2],
            });
          } else {
            setSelectedBaby({
              ...selectedBaby,
              ...baby,
              status: "normal",
              insight: INSIGHT_CATEGORY_STUNTING[3],
            });
          }
        }
      } else {
        setSelectedBaby({
          ...selectedBaby,
          ...baby,
          status: "-",
          insight: {
            title: "Data Empty",
            desc: "Please input monitoring data for this baby",
          },
        });
      }
    }
  }

  if (selectedBaby == null) {
    return (
      <div className="flex flex-col items-center">
        <NavbarComponent />

        <div className="w-11/12 mt-4">
          <div className="bg-blue-main bg-opacity-20 p-4 rounded-xl mt-2">
            <p className="f-p2-r text-justify">
              Please add your baby data{" "}
              <button
                onClick={() => {
                  navigate("/add-baby");
                }}
                className="text-blue-main"
                href="/add-baby"
              >
                here
              </button>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="f-p2-r text-center my-4">No Baby Found</h4>
            <FaRegSadTear />
          </div>
        </div>

        <div className="fixed bottom-0 w-full">
          <BottomNavbarComponent />
        </div>
      </div>
    );
  }

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
          {selectedBaby != null ? (
            <StuntingStatus
              name={selectedBaby.name}
              image={selectedBaby.image}
              status={selectedBaby.status}
              age={
                Math.floor(
                  (new Date() - new Date(selectedBaby.dob)) /
                    (1000 * 60 * 60 * 24 * 30)
                ) + " months"
              }
            />
          ) : null}
        </div>

        <div className="mt-6">
          <HeaderSection label="Stunting Insight" />
        </div>

        <div className="shadow-xl rounded-xl bg-white flex p-4 items-center gap-4 mt-4">
          <p className="f-p2-r text-justify">{selectedBaby?.insight?.desc}</p>
        </div>

        <div className="mt-6">
          <HeaderSection label="Growth Chart Overview" />
        </div>

        <div className="mt-3">
          <InputSelect
            label="Select Baby"
            placeholder="Select Baby"
            options={user.baby.map((baby) => ({
              label: baby.name,
              value: baby.id,
            }))}
            handleChange={(e) => {
              fetchMonitoring({ babyId: e.target.value });
            }}
          />
        </div>

        <div className="mt-4">
          {selectedBaby != null ? (
            <LineChartComponent
              gender={selectedBaby.gender}
              height={monitorings.map((monitoring) => monitoring.height)}
            />
          ) : null}
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
