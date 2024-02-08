import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputDefault } from "src/components/input/input-default";
import { InputSelect } from "src/components/input/input-select";
import { NavbarDefaultComponent } from "src/components/navbar";
import { ButtonComponent } from "src/components/button";
import { UserContext } from "src/context/UserContext";
import toast from "react-hot-toast";
import { BabyServices } from "src/services/BabyServices";

export function AddBabyPage() {
  const navigate = useNavigate();
  const babyServices = new BabyServices();

  const { user } = useContext(UserContext);

  const today = new Date();

  const minDateObj = new Date();
  minDateObj.setMonth(today.getMonth() - 59);
  const minDate = minDateObj.toISOString().split("T")[0];

  const [formData, setFormData] = useState({});

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await babyServices.CreateBaby({
      name: formData.name,
      gender: formData.gender,
      dob: new Date(formData.dob).toISOString(),
    });

    if (res) {
      toast.success(res.message);
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Add Baby" type="dark" />
      <div className="w-11/12 mt-0">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <InputDefault
              label="Name"
              placeholder="Your baby's name"
              value={formData.name}
              name="name"
              handleChange={handleChange}
              required={true}
            />
          </div>
          <div className="mb-3">
            <InputDefault
              label="Date of Birth"
              placeholder="Date of Birth"
              value={formData.dob}
              min={minDate}
              max={today.toISOString().split("T")[0]}
              name="dob"
              handleChange={handleChange}
              required={true}
              type="date"
            />
          </div>
          <div className="mb-3">
            <InputSelect
              label={"Gender"}
              name={"gender"}
              value={formData.gender}
              handleChange={handleChange}
              placeholder={"Select Gender"}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
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
