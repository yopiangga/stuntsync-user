import { NavbarDefaultComponent } from "src/components/navbar";
import { StuntingStatus } from "src/components/stunting/stunting-status";
import { FaChartLine } from "react-icons/fa";
import { HeaderSection } from "src/components/header/header-section";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { FiCheck } from "react-icons/fi";
import { LineChartComponent } from "src/components/chart/line-chart";

export function MonitoringPage() {
  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Child Monitoring Hub" />

      <div className="relative bg-white w-full flex justify-center">
        <div className="absolute w-full h-14 bg-blue-main"></div>
        <div className="w-11/12 relative">
          <StuntingStatus
            name={"Arya Putra"}
            // image={null}
            status={"stunting"}
            age={"2y, 2 month"}
          />
        </div>
      </div>

      <div className="w-11/12 mt-6">
        <div className="flex w-full gap-4">
          <CardStatus
            title="Stunting Status"
            value="Normal"
            date="Tue, 25 Jan 2024"
            icon={FaChartLine}
          />

          <CardStatus
            title="Growth Progress"
            value="Good"
            date="Tue, 25 Jan 2024"
            icon={FaChartLine}
          />
        </div>

        <div className="mt-6">
          <HeaderSection label="Growth Chart Overview" />
        </div>

        <div className="mt-0">
          <LineChartComponent />
        </div>

        <div className="mt-6">
          <HeaderSection label="Recomendations" />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <CardRecomendation
            title="More fruits and vegetables"
            description="Include more fruits and vegetables in their diet."
            check={true}
            handleCheck={() => {}}
          />
          <CardRecomendation
            title="Proteins and carbohydrates."
            description="Ensure a good balance of proteins and carbohydrates."
            check={false}
            handleCheck={() => {}}
          />
          <CardRecomendation
            title="Regular intake of dairy"
            description="Encourage regular intake of dairy for calcium."
            check={false}
            handleCheck={() => {}}
          />
          <CardRecomendation
            title="Schedule regular activity"
            description="Schedule regular physical activity for at least 30 minutes a day."
            check={false}
            handleCheck={() => {}}
          />
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <BottomNavbarComponent />
      </div>
    </div>
  );
}

function CardStatus({ title, value, date, icon }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-s1 p-4 text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-blue-secondary"></div>
      <p className="f-p2-sb text-blue-main mt-3">{title}</p>
      <h5 className="f-h5 mt-2 text-green-main italic">{value}</h5>
      <p className="f-p2-r text-gray-500 mt-1">{date}</p>
    </div>
  );
}

function CardRecomendation({ title, description, icon, check, handleCheck }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-s1 p-4 text-center flex gap-4 items-center">
      <div className="bg-slate-200 overflow-hidden rounded-xl">
        <img className="w-20 h-20 object-cover" />
      </div>
      <div className="grow text-left">
        <p className="f-p2-sb mt-2">{title}</p>
        <p className="f-p2-r text-gray-500 mt-1">{description}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={handleCheck}
          className={`w-6 h-6 rounded-lg flex justify-center items-center border-2 border-green-main ${
            check ? "bg-green-main" : "bg-white"
          }`}
        >
          {check ? <FiCheck color="white" /> : <></>}
        </button>
      </div>
    </div>
  );
}
