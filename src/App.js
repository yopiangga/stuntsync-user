import { useContext, useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
import AuthRouterPage from "./router/AuthRouterPage";
import UserRouterPage from "./router/UserRouterPage";
import { JWTPayload } from "./methods/JWTPayload";
import { AppContextProvider } from "./context/AppContextProvider";
import LoadComponent from "./components/load";

function App() {
  return (
    <AppContextProvider>
    <UserManager />
  </AppContextProvider>
  );
}

export default App;


function UserManager() {

  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }

  if (load) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <LoadComponent />
      </div>
    );
  } else if (user == null && load == false) {
    return <AuthRouterPage />;
  } else if (user.role == "user") {
    return <UserRouterPage />;
  } else {
    return <h1>Something went wrong</h1>;
  }
}
