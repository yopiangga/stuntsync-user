import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputDefault } from "src/components/input/input-default";
import { InputSelect } from "src/components/input/input-select";
import { InputTextarea } from "src/components/input/input-textarea";
import LoadComponent from "src/components/load";
import { NavbarDefaultComponent } from "src/components/navbar";
import imageUser from "src/assets/images/user.png";
import { ButtonComponent } from "src/components/button";

export function ScreeningPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);

    navigate("/profile");
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
            <InputDefault
              label="Weight"
              placeholder="Your baby's weight"
              value={formData.weight}
              name="weight"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <InputDefault
              label="Height"
              placeholder="Your baby's height"
              value={formData.height}
              name="height"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 mt-6 flex gap-2 flex-col">
            <ButtonComponent title="Save and Submit" action={async () => {}} />

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
