import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "src/components/button";
import { InputDefault } from "src/components/input/input-default";
import imageLogo from "src/assets/images/logo.png";
import { AuthServices } from "src/services/AuthServices";
import toast from "react-hot-toast";

export function SignUpPage() {
  const navigate = useNavigate();
  const authServices = new AuthServices();

  const [inputSignUp, setInputSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await authServices.SignUp({
      name: inputSignUp.name,
      email: inputSignUp.email,
      password: inputSignUp.password,
    });

    if (res) {
      toast.success(res.message);
      document.cookie = `token=${res.data.token}`;
      window.location.href = "/";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative h-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* <div className="absolute -top-10 right-0 left-0 w-full">
        <img src={""} className="w-full" />
      </div> */}
      <div className="w-full flex justify-start">
        <img src={imageLogo} alt="Logo" className="h-32" />
      </div>

      <br />

      <div className="w-11/12">
        <h2 className="f-h2">Sign Up</h2>

        <div className="mt-4">
          <InputDefault
            label={"Fullname"}
            name={"name"}
            value={inputSignUp.name}
            handleChange={handleChange}
            type={"text"}
            required={true}
            placeholder={""}
          />
        </div>
        <div className="mt-2">
          <InputDefault
            label={"Email"}
            name={"email"}
            value={inputSignUp.email}
            handleChange={handleChange}
            type={"email"}
            required={true}
            placeholder={""}
          />
        </div>
        <div className="mt-2">
          <InputDefault
            label={"Password"}
            name={"password"}
            value={inputSignUp.password}
            handleChange={handleChange}
            type={"password"}
            required={true}
            placeholder={"******"}
          />
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="bg-black-main absolute bottom-0 w-full flex justify-between items-center h-24 px-5">
        <p className="f-p2-r text-white">
          Do you have been account? <br />
          <button
            type="button"
            onClick={() => {
              navigate("/sign-in");
            }}
            className="f-p2-m"
          >
            Sign In
          </button>
        </p>
        <div className="w-1/3">
          <ButtonComponent title="Registrasi" type="submit" />
        </div>
      </div>
    </form>
  );
}
