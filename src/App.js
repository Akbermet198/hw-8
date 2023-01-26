import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { LoginForm } from "./components/login/login";
import { InnerForm } from "./components/InnerForm/InnerForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [startTimer, setStartTimer] = useState(undefined);

  const toggleBarVisibility = (parameter) => {
    setStartTimer(parameter);
  };
  console.log(isAuthenticated);

  const loginHandler = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", JSON.stringify(true));
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    const infoFromStorage = JSON.parse(localStorage.getItem("auth"));

    setIsAuthenticated(infoFromStorage);
  }, []);

  return (
    <div>
      <Header
        toggleBarVisibility={toggleBarVisibility}
        isAuthenticated={isAuthenticated}
        logoutHandler={logoutHandler}
      />
      {isAuthenticated ? (
        <InnerForm startTimer={startTimer} />
      ) : (
        <LoginForm loginHandler={loginHandler} />
      )}
    </div>
  );
}

export default App;
