import React, { createContext, useState } from "react";

const LoginApiContext = createContext();
const ApiContext = ({ children }) => {
  const [acessToken, setacessToken] = useState();
  const [refreshToken, setrefreshToken] = useState();
  const [name, setname] = useState();
  const [id, setid] = useState();
  const [logged, setlogged] = useState(false);
  const [error, seterror] = useState(false);
  const [bookid, setbookid] = useState();

  const login = async () => {
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
    <LoginApiContext.Provider
      value={{
        name,
        id,
        error,
        logged,
        acessToken,
        refreshToken,
        bookid,
        seterror,
        setlogged,
        setacessToken,
        setrefreshToken,
        login,
        setbookid,
      }}
    >
      {children}
    </LoginApiContext.Provider>
  );
};

export { LoginApiContext };
export { ApiContext };
