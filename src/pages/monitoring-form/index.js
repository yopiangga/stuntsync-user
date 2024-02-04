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

export function MonitoringFormPage() {
  const navigate = useNavigate();
  const {user} = useContext(UserContext)
  const monitoringServices = new MonitoringServices();

  const [formData, setFormData] = useState({
    month: new Date().toISOString(),
  });

  useEffect(() => {
    if (user.baby.length > 0) {
      setFormData({ ...formData, babyId: user.baby[0].id});
    }

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    // return
    
    const res = await monitoringServices.CreateMonitoring({
      babyId: formData.babyId,
      height: formData.height,
      month: formData.month,
    });
    if (res) {
      toast.success(res.message);
      navigate("/monitoring");
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

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <InputSelect 
              label={"Baby"}
              name={"babyId"}
              value={formData.babyId}
              handleChange={handleChange}
              placeholder={"Select Baby"}
              options={
                user.baby.map((baby) => {
                  return { value: baby.id, label: baby.name }
                })
              }
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
          <div className="mb-3">
            <InputDefault
              label="Month"
              placeholder=""
              value={new Date(formData.month).toISOString().split('T')[0]}
              name="month"
              handleChange={(e) => {
                setFormData({ ...formData, month: new Date(e.target.value).toISOString() });
              }}
              type="date"
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
