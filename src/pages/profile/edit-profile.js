import { UserContext } from "src/context/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputDefault } from "src/components/input/input-default";
import { InputSelect } from "src/components/input/input-select";
import { InputTextarea } from "src/components/input/input-textarea";
import LoadComponent from "src/components/load";
import { NavbarDefaultComponent } from "src/components/navbar";
import imageUser from "src/assets/images/user.png";
import { ButtonComponent } from "src/components/button";
import { UserServices } from "src/services/UserServices";
import toast from "react-hot-toast";

export function EditProfilePage() {
  const navigate = useNavigate();
  const userServices = new UserServices();

  const {user} = useContext(UserContext)

  const [editUser, setEditUser] = useState({});
  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setEditUser({
      name: user.name,
      email: user.email
    })

    setSelectedImage(user.image)
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append("image", file);

    const res = await userServices.UpdateImage(formData);

    if (res) {
      toast.success(res.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await userServices.UpdateProfile(editUser);

    if (res) {
      toast.success(res.message);
      navigate("/my-profile");

    }
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Edit Profile" type="dark" />
      <div className="w-11/12 mt-6">
        <div className="flex flex-col items-center">
          <div className="rounded-circle mb-2">
            <img src={selectedImage} className="rounded-full w-20 h-20" />
            <input
              id="photo"
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <label
            htmlFor="photo"
            className="f-p1-m text-primary-main cursor-pointer"
          >
            Change Photo
          </label>
        </div>

        {editUser == null ? (
          <LoadComponent />
        ) : (
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-3">
              <InputDefault
                label="Name"
                placeholder="Fullname"
                value={editUser.name}
                name="name"
                handleChange={handleChange}
              />
            </div>
           
            <div className="mb-3">
              <InputDefault
                label="Email"
                placeholder="contoh@email.com"
                value={editUser.email}
                name="email"
                handleChange={handleChange}
              />
            </div>

            <div className="mb-3 mt-6 flex gap-2 flex-col">
              <ButtonComponent title="Save Changes" type="submit" />

              <ButtonComponent
                title="Cancel"
                action={() => {
                  navigate("/my-profile");
                }}
                color="bg-slate-400"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
