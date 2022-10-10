import { useState } from "react";
import imagem from "./MaskGroup.png";
import style from "./style.css";

function Header({ SetFilteredMenu, Menu, value, SetValue }) {
  function search(event) {
    event.preventDefault();

    let NewArr = Menu.filter((item) => item.name.includes(value));
    SetFilteredMenu(NewArr);
  }

  return (
    <div className="navegation">
      <img src={imagem} alt="Logo Haburgueria" />
      <form>
        <input onChange={(e) => SetValue(e.target.value)} type="text" />
        <button onClick={(event) => search(event)}>Pesquisar</button>
      </form>
    </div>
  );
}

export default Header;
