import { NavbarDefaultComponent } from "src/components/navbar";
import { StuntingStatus } from "src/components/stunting/stunting-status";
import { FaChartLine } from "react-icons/fa";
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

export function MonitoringPage() {
  const navigate = useNavigate();
  const monitoringServices = new MonitoringServices();
  const recomendationServices = new RecomendationServices();
  const recomendationCheckServices = new RecomendationCheckServices();

  const {user} = useContext(UserContext);
  const [recomendations, setRecomendations] = useState([]);
  const [monitorings, setMonitorings] = useState([]);
  const [recomendationActive, setRecomendationActive] = useState();

  useEffect(() => {
    fetchMonitoring({ babyId: user.baby[0].id });
    fetchRecomendations({ babyId: user.baby[0].id });
  }, []);

  async function fetchMonitoring({babyId = user.baby[0].id}){
    const res = await monitoringServices.MonitoringByBabyId({ babyId });

    if (res) {
      setMonitorings(res.data);
    }
  }

  async function fetchRecomendations({babyId = user.baby[0].id}){
    const res = await recomendationServices.RecomendationByBabyId({ babyId });

    console.log(res);
    if (res) {
      setRecomendations(res.data);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {
        recomendationActive ? <div className="w-full h-screen fixed bg-black-main bg-opacity-25 z-50 flex justify-center items-center">
            <div className="w-11/12 bg-white rounded-xl shadow-lg p-4 text-justify">
              <h5 className="f-h5 text-center">
                Recommendation Check
              </h5>
              <p className="f-p1-m mt-4">{recomendationActive.title}</p>
              <p className="f-p1-r">{recomendationActive.desc}</p>

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
                    const res = await recomendationCheckServices.CreateRecomendationCheck({ recomendationId: recomendationActive.id });
                    if (res) {
                      fetchRecomendations({ babyId: user.baby[0].id });
                      setRecomendationActive(null);
                    }
                  }}
                />
                </div>
            </div>
          </div> : null
      }
      <NavbarDefaultComponent title="Child Monitoring Hub" />

      <div className="relative bg-white w-full flex justify-center">
        <div className="absolute w-full h-14 bg-blue-main"></div>
        <div className="w-11/12 relative">
        {user.baby.length > 0 ? (
            <StuntingStatus
              name={user.baby[0].name}
              image={user.baby[0].image}
              status={"stunting"}
              age={
                Math.floor(
                  (new Date() - new Date(user.baby[0].dob)) /
                    (1000 * 60 * 60 * 24 * 30)
                ) + " months"
              }
            />
          ) : null}
        </div>
      </div>

      <div className="w-11/12 mt-6">
        <div className="flex w-full gap-4">
          <CardStatus
            title="Stunting Status"
            value="Normal"
            date="Tue, 25 Jan 2024"
            icon={iconGrowth}
          />

          <CardStatus
            title="Growth Progress"
            value="Good"
            date="Tue, 25 Jan 2024"
            icon={iconGrowth}
          />
        </div>

        <div className="mt-6">
          <HeaderSection label="Growth Chart Overview" />
        </div>

        <div className="mt-0">
        <LineChartComponent data={
            {
              labels: monitorings.map((monitoring) => new Date(monitoring.createdAt).toLocaleDateString()),
              datasets: [
                {
                  label: "Height",
                  data: monitorings.map((monitoring) => monitoring.height),
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
              ],
            }
          } />
        </div>

        <div className="mt-6">
          <HeaderSection label="Recomendations" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {
            recomendations.map((recomendation, index) => (
              <CardRecomendation
                key={"recomendation" + index}
                title={recomendation.title}
                description={recomendation.desc}
                qty={recomendation.qty}
                action={async () => {setRecomendationActive(recomendation)}}
                // check={
                //   // date now - date recomendation checks last more than qty / 30 days
                //   (new Date() - new Date(recomendation.checks[recomendation.checks.length - 1].createdAt)) / (1000 * 60 * 60 * 24) > 30
                // }
                // handleCheck={async () => {
                //   const res = await recomendationCheckServices.CreateRecomendationCheck({ recomendationId: recomendation.id });
                //   console.log(res);
                //   if (res) {
                //     fetchRecomendations({ babyId: user.baby[0].id });
                //   }
                // }}
                icon="https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg"
              />
            ))
          }
         
        </div>

        <div className="mt-6">
          <HeaderSection label="Resume Activity (month)" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {
            recomendations.map((recomendation, index) => (
              <CardResult
                key={"recomendation-result" + index}
                title={recomendation.title}
                description={recomendation.desc}
                percent={recomendation.checks.length / recomendation.qty * 100}
              />
            ))
          }
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
    <div className="w-full bg-white rounded-xl shadow-s1 p-4 text-center flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-blue-secondary flex justify-center items-center">
        <img src={icon} />
      </div>
      <p className="f-p2-sb text-blue-main mt-3">{title}</p>
      <h5 className="f-h5 mt-2 text-green-main italic">{value}</h5>
      <p className="f-p2-r text-gray-500 mt-1">{date}</p>
    </div>
  );
}

function CardRecomendation({ title, description, icon, qty, action }) {
  return (
    <button onClick={action} className="w-full bg-white rounded-xl shadow-lg p-4 text-center flex gap-3">
      <div className="w-16 h-16">
        <img
          src={icon}
          className="w-16 h-16 object-cover bg-slate-200 overflow-hidden rounded-xl"
        />
      </div>
      <div className="w-7/12 text-left">
        <p className="f-p2-sb mt-0">{title}</p>
        <p className="f-p2-r text-gray-500 mt-1">{description}</p>
      </div>
      <div className="w-10 h-16 flex items-center text-center">
        <p className="text-xs text-gray-500 mt-1 font-bold"><span className="text-blue-main">{qty}</span> / mth</p>
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
        <p className="f-p2-sb mt-0">{title}</p>
        <p className="f-p2-r text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}
