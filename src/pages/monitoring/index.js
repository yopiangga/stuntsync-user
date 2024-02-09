import { NavbarDefaultComponent } from "src/components/navbar";
import { StuntingStatus } from "src/components/stunting/stunting-status";
import { FaChartLine, FaRegSadTear } from "react-icons/fa";
import { HeaderSection } from "src/components/header/header-section";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { FiCheck } from "react-icons/fi";
import { LineChartComponent } from "src/components/chart/line-chart";
import iconGrowth from "src/assets/icon/growth.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "src/context/UserContext";
import { MonitoringServices } from "src/services/MonitoringServices";
import { RecomendationServices } from "src/services/RecomendationServices";
import { RecomendationCheckServices } from "src/services/RecomendationCheckServices";
import { ButtonComponent } from "src/components/button";
import { useNavigate } from "react-router-dom";
import imageExample from "src/assets/images/default.png";
import { MALE_GRAPH } from "src/constant/male-graph";
import { FEMALE_GRAPH } from "src/constant/female-graph";
import { InputSelect } from "src/components/input/input-select";

export function MonitoringPage() {
  const navigate = useNavigate();
  const monitoringServices = new MonitoringServices();
  const recomendationServices = new RecomendationServices();
  const recomendationCheckServices = new RecomendationCheckServices();

  const { user } = useContext(UserContext);
  const [recomendations, setRecomendations] = useState([]);
  const [monitorings, setMonitorings] = useState([]);
  const [recomendationActive, setRecomendationActive] = useState();
  const [selectedBaby, setSelectedBaby] = useState();

  useEffect(() => {
    if (user.baby.length > 0) {
      fetchMonitoring({ babyId: user.baby[0].id });
      fetchRecomendations({ babyId: user.baby[0].id });
    }
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
            setSelectedBaby({ ...baby, status: "danger" });
          } else if (
            MALE_GRAPH[age].min2sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({ ...baby, status: "danger" });
          } else if (
            MALE_GRAPH[age].min1sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({ ...baby, status: "warning" });
          } else {
            setSelectedBaby({ ...baby, status: "normal" });
          }
        } else {
          if (FEMALE_GRAPH[age].min3sd > res.data[res.data.length - 1].height) {
            setSelectedBaby({ ...baby, status: "danger" });
          } else if (
            MALE_GRAPH[age].min2sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({ ...baby, status: "danger" });
          } else if (
            MALE_GRAPH[age].min1sd > res.data[res.data.length - 1].height
          ) {
            setSelectedBaby({ ...baby, status: "warning" });
          } else {
            setSelectedBaby({ ...baby, status: "normal" });
          }
        }
      } else {
        setSelectedBaby({
          // ...selectedBaby,
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

  async function fetchRecomendations({ babyId }) {
    const res = await recomendationServices.RecomendationByBabyId({ babyId });

    if (res) {
      setRecomendations(res.data);
    }
  }

  if (selectedBaby == null) {
    return (
      <div className="flex flex-col items-center">
        <NavbarDefaultComponent title="Child Monitoring Hub" />

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
      {recomendationActive ? (
        <div className="w-full h-screen fixed bg-black-main bg-opacity-25 z-50 flex justify-center items-center">
          <div className="w-11/12 bg-white rounded-xl shadow-lg p-5 text-justify">
            <h4 className="f-h4 text-center">Recommendation Check</h4>
            <p className="f-p1-m mt-4">{recomendationActive.title}</p>
            <p className="f-p1-r mt-1 text-justify">
              {recomendationActive.desc}
            </p>

            <div className="flex gap-2 mt-4">
              <ButtonComponent
                title="Cancel"
                type="button"
                color="bg-slate-400"
                action={() => {
                  setRecomendationActive(null);
                }}
              />
              <ButtonComponent
                title="Check"
                type="button"
                color="bg-blue-main"
                action={async () => {
                  const res =
                    await recomendationCheckServices.CreateRecomendationCheck({
                      recomendationId: recomendationActive.id,
                    });
                  if (res) {
                    fetchRecomendations({ babyId: user.baby[0].id });
                    setRecomendationActive(null);
                  }
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
      <NavbarDefaultComponent title="Child Monitoring Hub" />

      <div className="relative bg-white w-full flex justify-center">
        <div className="absolute w-full h-14 bg-blue-main"></div>
        <div className="w-11/12 relative">
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
        </div>
      </div>

      <div className="w-11/12 mt-4">
        <div className="flex w-full gap-4">
          <CardStatus
            title="Stunting Status"
            value={selectedBaby.status}
            date={
              monitorings.length > 0
                ? new Date(
                    monitorings[monitorings.length - 1]?.createdAt
                  ).toDateString()
                : "No Data"
            }
            icon={iconGrowth}
          />

          <CardStatus
            title="Growth Progress"
            value={
              monitorings.length > 0
                ? monitorings[monitorings.length - 1]?.height + " cm"
                : "-"
            }
            date={
              monitorings.length > 0
                ? new Date(
                    monitorings[monitorings.length - 1]?.createdAt
                  ).toDateString()
                : "No Data"
            }
            icon={iconGrowth}
          />
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
              fetchRecomendations({ babyId: e.target.value });
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

        <div className="mt-6">
          <HeaderSection label="Recomendations" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {recomendations.map((recomendation, index) => (
            <CardRecomendation
              key={"recomendation" + index}
              title={recomendation.title}
              description={recomendation.desc}
              qty={recomendation.qty}
              action={async () => {
                setRecomendationActive(recomendation);
              }}
              icon={imageExample}
            />
          ))}
        </div>

        <div className="mt-6">
          <HeaderSection label="Resume Activity (month)" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {recomendations.map((recomendation, index) => (
            <CardResult
              key={"recomendation-result" + index}
              title={recomendation.title}
              description={recomendation.desc}
              percent={parseInt(
                (recomendation.checks.length / recomendation.qty) * 100
              )}
            />
          ))}
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

function CardStatus({ title, value, date, icon }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-xl p-4 text-center flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-blue-secondary flex justify-center items-center">
        <img src={icon} />
      </div>
      <p className="f-p2-sb text-blue-main mt-3">{title}</p>
      <h5 className="f-h5 mt-2 uppercase">{value}</h5>
      <p className="f-p2-r text-gray-500 mt-1">{date}</p>
    </div>
  );
}

function CardRecomendation({ title, description, icon, qty, action }) {
  return (
    <button
      onClick={action}
      className="w-full bg-white rounded-xl shadow-lg p-4 text-center flex gap-3"
    >
      <div className="w-16 h-16">
        <img
          src={icon}
          className="w-16 h-16 object-cover bg-slate-200 overflow-hidden rounded-xl"
        />
      </div>
      <div className="w-7/12 text-left">
        <p className="f-p2-sb mt-0 line-clamp-2">{title}</p>
        <p className="f-p2-r text-gray-500 mt-1 text-justify line-clamp-2">
          {description}
        </p>
      </div>
      <div className="w-10 h-16 flex items-center text-center">
        <p className="text-xs text-gray-500 mt-1 font-bold">
          <span className="text-blue-main">{qty}</span> / mth
        </p>
      </div>
    </button>
  );
}

function CardResult({ title, description, icon, percent }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 text-center flex gap-3">
      <div className="w-16">
        <div
          className={`w-16 h-16 object-cover bg-opacity-70 overflow-hidden rounded-xl flex justify-center items-center ${
            percent > 80
              ? "bg-green-main"
              : percent > 60
              ? "bg-yellow-400"
              : "bg-red-main"
          }`}
        >
          <h5 className="f-h5 text-white">{percent}%</h5>
        </div>
      </div>
      <div className="w-8/12 text-left">
        <p className="f-p2-sb mt-0 line-clamp-2">{title}</p>
        <p className="f-p2-r text-gray-500 mt-1 text-justify line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
}
