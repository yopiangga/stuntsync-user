import { FiHome, FiShoppingCart, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import motif from "src/assets/ilustration/motif.png";

export function BottomNavbarComponent(props) {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const isHome = path == "/";
  const isOrder = path == "/order";
  const isProfile = path == "/my-profile";

  return (
    <div className="w-full max-w-screen-sm bg-blue-main flex justify-around p-1 mx-auto relative">
      <div className="absolute">
        <img src={motif} />
      </div>
      <MenuCard
        icon={FiHome}
        title="Beranda"
        active={isHome}
        handleClick={() => {
          navigate("/");
        }}
      />
      <MenuCard
        icon={FiShoppingCart}
        title="Pesanan"
        active={isOrder}
        handleClick={() => {
          navigate("/order");
        }}
      />
      <MenuCard
        icon={FiUser}
        title="Akun"
        active={isProfile}
        handleClick={() => {
          navigate("/my-profile");
        }}
      />
    </div>
  );
}

function MenuCard(props) {
  return (
    <button
      onClick={props.handleClick}
      className={`flex flex-col items-center justify-center rounded-lg p-2 w-full relative z-20 ${
        props.active ? "bg-white text-blue-main" : "text-white"
      }`}
    >
      <props.icon size={24} />
      <p className="font-semibold f-p2-r mt-0.5">{props.title}</p>
    </button>
  );
}
