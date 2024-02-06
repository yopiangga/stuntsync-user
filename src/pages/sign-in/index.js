import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "src/components/button";
import { InputDefault } from "src/components/input/input-default";
import { UserContext } from "src/context/UserContext";
import imageLogo from "src/assets/images/logo.png";
import { AuthServices } from "src/services/AuthServices";
import toast from "react-hot-toast";

export function SignInPage() {
  const navigate = useNavigate();
  const authServices = new AuthServices();
  const { user, setUser } = useContext(UserContext);

  const [inputSignIn, setInputSignIn] = useState({
    email: "yopiangga@email.com",
    password: "123123123",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputSignIn((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await authServices.SignIn(inputSignIn);

    if (res.code === 200) {
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

      {/* <br /> */}
      <br />

      <div className="w-11/12">
        <h2 className="f-h2">Sign In</h2>

        <div className="mt-4">
          <InputDefault
            label={"Email"}
            name={"email"}
            value={inputSignIn.email}
            handleChange={handleChange}
            type={"email"}
            required={true}
            placeholder={"Masukkan email anda"}
          />
        </div>
        <div className="mt-2">
          <InputDefault
            label={"Password"}
            name={"password"}
            value={inputSignIn.password}
            handleChange={handleChange}
            type={"password"}
            required={true}
            placeholder={"******"}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/forgot-password");
            }}
            className="f-p2-r text-blue-main"
          >
            Lupa Password?
          </button>
        </div>
      </div>

      <br />
      <br />

      <div className="bg-black-main absolute bottom-0 w-full flex justify-between items-center h-24 px-5">
        <p className="f-p2-r text-white">
          Belum memiliki akun? <br />
          <button
            type="button"
            onClick={() => {
              navigate("/sign-up");
            }}
            className="f-p2-m text-blue-main"
          >
            Registrasi
          </button>
        </p>
        <div className="w-1/3">
          <ButtonComponent title="Masuk" type="submit" />
        </div>
      </div>
    </form>
  );
}
