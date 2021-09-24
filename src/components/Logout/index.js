import React from "react";
import { useContext } from "react/cjs/react.development";
import { LoginApiContext } from "../../stores/LoginApiContext";
import Shape1 from "../../assets/img/Shape-1.png";
import Shape from "../../assets/img/Shape.png";

function Logout() {
  const data = useContext(LoginApiContext);
  return (
    <div className="header-logout">
      <div className="title-row-books">
        <p className="title">Books</p>
      </div>
      <div className="logout-col">
        <p className="welcome">
          Bem vindo, <span>{data.name}</span>
        </p>
        <button onClick={() => data.setlogged(false)} className="logout-btn">
          <img src={Shape1} />
          <img src={Shape} />
        </button>
      </div>
    </div>
  );
}

export default Logout;
