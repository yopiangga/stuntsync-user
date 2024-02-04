import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "src/components/button";
import { NavbarDefaultComponent } from "src/components/navbar";
import { UserServices } from "src/services/UserServices";

export function ChangePasswordPage() {
  const navigate = useNavigate();
  const userServices = new UserServices();

  const [editPassword, setEditPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmation: "",
  });
  const [errorInput, setErrorInput] = useState({});
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmationPasswordVisible, setIsConfirmationPasswordVisible] =
    useState(false);

  const handleChange = (e) => {
    setEditPassword({ ...editPassword, [e.target.name]: e.target.value });

    const temp = { ...editPassword, [e.target.name]: e.target.value };
    validationStage(temp);
  };

  const validationStage = (data) => {
    setErrorInput(null);

    if (data.oldPassword == "") {
      setErrorInput({ oldPassword: "Password is empty" });
      return false;
    } else if (data.oldPassword.length < 8) {
      setErrorInput({ oldPassword: "Password min 8 charater" });
      return false;
    }

    if (data.newPassword == "") {
      setErrorInput({ newPassword: "New Password is empty" });
      return false;
    } else if (data.newPassword.length < 8) {
      setErrorInput({ newPassword: "New password min 8 character" });
      return false;
    }

    if (data.confirmation == "") {
      setErrorInput({ confirmation: "Repeat password is empty" });
      return false;
    }

    if (data.newPassword != data.confirmation) {
      setErrorInput({ confirmation: "Repeat password does not match" });
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validationStage(editPassword);

    if (validation == false) {
      return;
    }

    const res = await userServices.UpdatePassword(editPassword);

    if (res){
      toast.success(res.message)
      navigate("/my-profile");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Change Password" type="dark" />
      <div className="w-11/12 mt-6">
        <form className="lg:col-span-6 col-span-9" onSubmit={handleSubmit}>
          <div className="mt-4 relative">
            <label className="f-p1-m text-neutral-1000">Current Password</label>
            <button
              type="button"
              placeholder=""
              onClick={() => {
                setIsOldPasswordVisible(!isOldPasswordVisible);
              }}
              className="absolute bottom-4 right-3"
            >
              {isOldPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
            <input
              name="oldPassword"
              onChange={handleChange}
              value={editPassword.oldPassword}
              placeholder="******"
              type={isOldPasswordVisible ? "text" : "password"}
              className="w-full border-2 bg-neutral-200 border-neutral-200 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-primary-main"
            />
            <p className="f-p2-r text-danger-main">
              {errorInput?.oldPassword ?? ""}
            </p>
          </div>

          <div className="mt-4 relative">
            <label className="f-p1-m text-neutral-1000">New Password</label>
            <button
              type="button"
              placeholder=""
              onClick={() => {
                setIsNewPasswordVisible(!isNewPasswordVisible);
              }}
              className="absolute bottom-4 right-3"
            >
              {isNewPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
            <input
              name="newPassword"
              onChange={handleChange}
              value={editPassword.newPassword}
              placeholder="******"
              type={isNewPasswordVisible ? "text" : "password"}
              className="w-full border-2 bg-neutral-200 border-neutral-200 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-primary-main"
            />
            <p className="f-p2-r text-danger-main">
              {errorInput?.newPassword ?? ""}
            </p>
          </div>

          <div className="mt-4 mb-6 relative">
            <label className="f-p1-m text-neutral-1000">
              Repeat New Password
            </label>
            <button
              type="button"
              placeholder=""
              onClick={() => {
                setIsConfirmationPasswordVisible(
                  !isConfirmationPasswordVisible
                );
              }}
              className="absolute bottom-4 right-3"
            >
              {isConfirmationPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
            <input
              name="confirmation"
              onChange={handleChange}
              value={editPassword.confirmation}
              placeholder="******"
              type={isConfirmationPasswordVisible ? "text" : "password"}
              className="w-full border-2 bg-neutral-200 border-neutral-200 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-primary-main"
            />
            <p className="f-p2-r text-danger-main">
              {errorInput?.confirmation ?? ""}
            </p>
          </div>

          {errorInput == null ? (
            <div className="mb-4">
              <ButtonComponent
                title="Simpan"
                type="submit"
                color="bg-blue-main"
              />
            </div>
          ) : (
            <div className="mb-4">
              <ButtonComponent
                title="Simpan"
                type="button"
                color="bg-slate-400"
              />
            </div>
          )}

          <div>
            <ButtonComponent
              title="Cancel"
              type="button"
              color="bg-slate-400"
              action={() => {
                navigate("/my-profile");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
