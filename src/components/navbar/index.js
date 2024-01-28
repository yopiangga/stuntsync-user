import { useContext } from "react";
import { FiBell, FiCalendar } from "react-icons/fi";
import { UserContext } from "src/context/UserContext";
import * as Icons from "react-icons/fi";

export function NavbarComponent(props) {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-blue-main w-full flex justify-center text-white py-6">
      <div className="w-11/12 flex items-center">
        <div className="grow">
          <div className="flex gap-2 items-center">
            <FiCalendar />
            <p className="f-p2-r">Tue, 25 Jan 2024</p>
          </div>
          <h5 className="f-h5 line-clamp-1 mt-2">Hello, {user.name}</h5>
        </div>
        <div>
          <button className="rounded-xl bg-blue-tertiary p-4">
            <FiBell />
          </button>
        </div>
      </div>
    </div>
  );
}

const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FiActivity />;
  }

  return <IconComponent />;
};

export function NavbarDefaultComponent({
  type,
  title,
  leftIcon,
  rightIcon,
  handleLeft,
  handleRight,
}) {
  return (
    <div
      className={`w-full py-5 items-center text-center relative flex gap-4 justify-center shadow-sm ${
        type == "dark" ? "text-slate-900 bg-white" : "text-white bg-blue-main"
      }`}
    >
      {leftIcon != null ? (
        <button
          type="button"
          onClick={handleLeft}
          className="flex justify-end items-center absolute left-5"
        >
          <DynamicFaIcon name={leftIcon} size={24} />
        </button>
      ) : (
        <></>
      )}
      <h4 className="font-semibold f-h4">{title}</h4>
      {rightIcon != null ? (
        <button
          type="button"
          onClick={handleRight}
          className="flex justify-start items-center absolute right-5"
        >
          <rightIcon size={24} />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
