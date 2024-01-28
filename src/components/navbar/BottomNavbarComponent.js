import { FiHome, FiPlus, FiUser } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export function BottomNavbarComponent(props) {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const isHome = path == "/";
  const isMonitoring = path == "/monitoring";
  const isArticle = path == "/article";
  const isProfile = path == "/my-profile";

  return (
    <div className="w-full max-w-screen-sm bg-white shadow-s1 flex justify-around p-1 mx-auto relative">
      <MenuCard
        icon={FiHome}
        title="Home"
        active={isHome}
        handleClick={() => {
          navigate("/");
        }}
      />
      <MenuCard
        icon={IoDocumentTextOutline}
        title="Monitoring"
        active={isMonitoring}
        handleClick={() => {
          navigate("/monitoring");
        }}
      />
      <div className="relative w-56 flex justify-center">
        <button
          onClick={() => {
            navigate("/screening");
          }}
          className="bg-blue-main w-12 h-12 flex justify-center items-center rounded-xl text-white absolute -top-7"
        >
          <FiPlus size={28} />
        </button>
      </div>
      <MenuCard
        icon={MdOutlineArticle}
        title="Article"
        active={isArticle}
        handleClick={() => {
          navigate("/article");
        }}
      />
      <MenuCard
        icon={FiUser}
        title="Profile"
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
        props.active ? "text-blue-main" : "text-black-secondary text-opacity-50"
      }`}
    >
      <props.icon size={20} />
      <p className="font-semibold text-[10px] mt-1">{props.title}</p>
    </button>
  );
}
