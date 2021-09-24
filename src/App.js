import Books from "./components/Books";
import react, { useContext } from "react";
import LoginPage from "./components/Login";
import { LoginApiContext } from "./stores/LoginApiContext";
import "./styles.css";
import Logout from "./components/Logout";

function App() {
  const data = useContext(LoginApiContext);

  return (
    <>
      {!data.logged || data.acessToken == undefined ? (
        <LoginPage />
      ) : (
        <>
          <Logout />
          <Books />
        </>
      )}
    </>
  );
}

export default App;
