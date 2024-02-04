import { useNavigate } from "react-router-dom";
import { NavbarDefaultComponent } from "src/components/navbar";

export function DetailVideoPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent
        title="Detail Video"
        type="dark"
        leftIcon={"FiArrowLeft"}
        handleLeft={() => {
          navigate("/article");
        }}
      />

      <div className="w-11/12 mt-6">
        <div>
          <img
            src="https://picsum.photos/200/300"
            alt="Article"
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <h2 className="f-h2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptates.
          </h2>
          <p className="f-p2-r mt-2">28 Jan 2024</p>
        </div>

        <div className="mt-4">
          <p className="f-p1-r text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptates.
          </p>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
