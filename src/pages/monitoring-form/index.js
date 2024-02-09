import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputDefault } from "src/components/input/input-default";
import { InputSelect } from "src/components/input/input-select";
import { InputTextarea } from "src/components/input/input-textarea";
import LoadComponent from "src/components/load";
import { NavbarDefaultComponent } from "src/components/navbar";
import imageUser from "src/assets/images/user.png";
import { ButtonComponent } from "src/components/button";
import { UserContext } from "src/context/UserContext";
import { MonitoringServices } from "src/services/MonitoringServices";
import toast from "react-hot-toast";
import { RecomendationServices } from "src/services/RecomendationServices";

export function MonitoringFormPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const monitoringServices = new MonitoringServices();
  const recomendationServices = new RecomendationServices();

  const [formData, setFormData] = useState({
    month: new Date().toISOString(),
  });

  useEffect(() => {
    if (user.baby.length > 0) {
      setFormData({ ...formData, babyId: user.baby[0].id });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const baby = user.baby.find((baby) => baby.id == formData.babyId);
    const dob = new Date(baby.dob);
    const age = Math.floor(
      (new Date().getTime() - dob.getTime()) / (1000 * 3600 * 24 * 30)
    );

    const res = await monitoringServices.CreateMonitoring({
      babyId: formData.babyId,
      height: formData.height,
      month: age,
    });

    const resRecomendation =
      await recomendationServices.CreateRecomendationAuto({
        babyId: formData.babyId,
        month: age,
      });

    if (res) {
      toast.success(res.message);
      window.location.href = "/monitoring";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Child Monitoring Form" type="dark" />
      <div className="w-11/12 mt-6">
        <div className="bg-red-secondary bg-opacity-20 p-4 rounded-xl">
          <p className="f-p2-r text-red-main text-justify">
            Please provide the following information for the most accurate
            monitoring of your child's growth and health.
          </p>
        </div>

        <div className="bg-blue-main bg-opacity-20 p-4 rounded-xl mt-2">
          <p className="f-p2-r text-justify">
            If your baby is not yet registered, please register your baby first{" "}
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

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <InputSelect
              label={"Baby"}
              name={"babyId"}
              value={formData.babyId}
              handleChange={handleChange}
              placeholder={"Select Baby"}
              options={user.baby.map((baby) => {
                return { value: baby.id, label: baby.name };
              })}
            />
          </div>
          <div className="mb-3">
            <InputDefault
              label="Height"
              placeholder="Your baby's height"
              value={formData.height}
              name="height"
              handleChange={handleChange}
              required={true}
            />
          </div>

          <div className="mb-3 mt-6 flex gap-2 flex-col">
            <ButtonComponent title="Save and Submit" type="submit" />

            <ButtonComponent
              title="Cancel"
              action={() => {
                navigate("/");
              }}
              color="bg-slate-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
