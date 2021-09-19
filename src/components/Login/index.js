import React from "react";
import "./styles.css";

function Login() {
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const formData = new FormData();
  formData.append("email", "desafio@ioasys.com.br");
  formData.append("password", "12341234");
  console.log(formData);
  const login = "https://books.ioasys.com.br/api/v1/auth/sign-in";
  const option = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: '{"email": "desafio@ioasys.com.br", "password": "12341234"}',
  };
  fetch(login, option).then((r) => console.log(r));

  return null;
}

export default Login;
