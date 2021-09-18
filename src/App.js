import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="login-page-container-sectioon">
      {loginWithRedirect()}
    </section>
  );
}

export default App;
