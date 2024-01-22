import { useContext } from "react";
import { FiBell, FiCalendar } from "react-icons/fi";
import { UserContext } from "src/context/UserContext";

export function NavbarComponent(props) {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-blue-main w-full flex justify-center text-white py-4">
      <div className="w-11/12 flex items-center">
        <div>
          <div className="flex gap-2">
            <FiCalendar />
            <p className="f-p1-r">Tue, 25 Jan 2024</p>
          </div>
          <h4 className="f-h4 line-clamp-1 mt-2">Hello, {user.name}</h4>
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
