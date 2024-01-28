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

export function EditProfilePage() {
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState({
    name: "Alfian Prisma Yopiangga",
    gender: "Pria",
    email: "yopigambyok@gmail.com",
    address: "RT 14 RW 05 Desa Gambyok Kecamatan Grogol Kabupaten Kediri",
  });
  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {}, []);

  const handleChange = (e) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);

    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Edit Profile" type="dark" />
      <div className="w-11/12 mt-6">
        <div className="flex flex-col items-center">
          <div className="rounded-circle mb-2">
            <img src={imageUser} className="rounded-full w-20 h-20" />
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
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <InputSelect
                label="Gender"
                options={[
                  { label: "Pria", value: "pria" },
                  { label: "Wanita", value: "wanita" },
                ]}
                value={editUser.gender}
                name="gender"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <InputDefault
                label="Email"
                placeholder="contoh@email.com"
                value={editUser.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <InputTextarea
                label="Address"
                placeholder="Your address"
                value={editUser.address}
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-6 flex gap-2 flex-col">
              <ButtonComponent title="Save Changes" action={async () => {}} />

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
