import React from "react";
import "./styles.css";

function Login() {
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  console.log(email.value);
  const login = "https://books.ioasys.com.br/api/v1/auth/sign-in";
  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: {
      email: "desafio@ioasys.com.br",
      password: "12341234",
    },
  };
  fetch(login, option).then((r) => console.log(r.headers.get("")));

  return null;
}

export default Login;
