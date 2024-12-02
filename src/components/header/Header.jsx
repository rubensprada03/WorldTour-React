import React from "react";
import * as C from "./style";

const Header = ({ background }) => {
  return (
    <C.HeaderWrap background={background}>
      <C.Menu>
        <a href="#home">Destinos</a>
        <a href="/flights">Voos</a>
        <a href="#services">Hotéis</a>
        <a href="#contact">Entrar</a>
      </C.Menu>
    </C.HeaderWrap>
  );
};

export default Header;
