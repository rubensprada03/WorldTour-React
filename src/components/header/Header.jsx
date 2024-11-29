import React from "react";
import * as C from "./style";

const Header = () => {
  return (
    <C.HeaderWrap>
      <C.Menu>
        <a href="#home">Destinos</a>
        <a href="#about">Voos</a>
        <a href="#services">Hotéis</a>
        <a href="#contact">Entrar</a>
      </C.Menu>
    </C.HeaderWrap>
  );
};

export default Header;
