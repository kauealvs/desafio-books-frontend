import Books from "./components/Books";
import react, { useState, useEffect } from "react";
import Shape1 from "./assets/img/Shape-1.png";
import Shape from "./assets/img/Shape.png";

import "./styles.css";

function App() {
  const [acessToken, setacessToken] = useState();
  const [refreshToken, setrefreshToken] = useState();
  const [name, setname] = useState();
  const [id, setid] = useState();
  const [logged, setlogged] = useState(false);
  const [error, seterror] = useState(false);

  const Login = async () => {
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    let loginBody = { email: email.value, password: password?.value };
    const login = "https://books.ioasys.com.br/api/v1/auth/sign-in";
    const option = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginBody),
    };
    await fetch(login, option)
      .then((r) => {
        console.log(r);
        r.status == "200" ? setlogged(true) : setlogged(false);
        r.status == "401" || r.status == "400"
          ? seterror(true)
          : seterror(false);
        setacessToken(r.headers.get("Authorization"));
        setrefreshToken(r.headers.get("refresh-token"));
        return r.json();
      })
      .then((r) => {
        setname(r.name);
        setid(r.id);
      });
  };
  return (
    <>
      {!logged || acessToken == undefined ? (
        <section className="login-page-container-sectioon">
          <div>
            <p className="books-title-form">Books</p>
            <input className="email" type="email" placeholder="E-mail" />
            <br></br>
            <input className="password" type="password" placeholder="Senha" />
            <button
              onClick={() => {
                Login();
              }}
            >
              Entrar
            </button>
            {error && <p className="error">E-mail e ou senha incorretos</p>}
          </div>
        </section>
      ) : (
        <>
          <div className="header-logout">
            <div className="title-row-books">
              <p className="title">Books</p>
            </div>
            <div className="logout-col">
              <p className="welcome">
                Bem vindo, <span>{name}</span>
              </p>
              <button onClick={() => setlogged(false)} className="logout-btn">
                <img src={Shape1} />
                <img src={Shape} />
              </button>
            </div>
          </div>
          <Books
            acessToken={acessToken}
            refreshToken={refreshToken}
            id={id}
            name={name}
          ></Books>
        </>
      )}
    </>
  );
}

export default App;
