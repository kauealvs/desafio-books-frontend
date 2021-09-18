import Login from "./components/Login";
import "./styles.css";

function App() {
  return (
    <section className="login-page-container-sectioon">
      <div>
        <p>Books</p>
        <input class="email" type="email" placeholder="E-mail" />
        <br></br>
        <input class="password" type="password" placeholder="Senha" />
        <button
          onClick={() => {
            Login();
          }}
        >
          Entrar
        </button>
      </div>
    </section>
  );
}

export default App;
