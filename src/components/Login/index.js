import React from "react";
import { useContext } from "react/cjs/react.development";
import { LoginApiContext } from "../../stores/LoginApiContext";

function Login() {
  const data = useContext(LoginApiContext);
  return (
    <section className="login-page-container-sectioon">
      <div>
        <p className="books-title-form">Books</p>
        <input className="email" type="email" placeholder="E-mail" />
        <br></br>
        <input className="password" type="password" placeholder="Senha" />
        <button
          onClick={() => {
            data.login();
          }}
        >
          Entrar
        </button>
        {data.error && <p className="error">E-mail e ou senha incorretos</p>}
      </div>
    </section>
  );
}

export default Login;
