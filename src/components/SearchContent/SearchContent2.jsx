import React from "react";
import "../SearchContent/style.css";
import * as Global from "../../Styles/global";

const SearchContent2 = () => {
  return (
    <div className="search-content">
      <header className="header-content">
        <nav className="header-nav">
          <a href="#home">Destinos</a>
          <a href="#about">Voos</a>
          <a href="#services">Hotéis</a>
          <a href="#contact">Entrar</a>
        </nav>
      </header>

      <Global.Wrap>
        <div className="form d-flex justify-content-center align-items-center">
          <div className="input-wrapper">
            <img src="path/to/your-icon1.png" alt="Local" className="icon" />
            <input
              type="text"
              placeholder="Local de partida?"
              className="input-first"
            />
          </div>
          <div className="input-wrapper">
            <img src="path/to/your-icon2.png" alt="Chegada" className="icon" />
            <input type="text" placeholder="Chegada" />
          </div>
          <div className="input-wrapper">
            <img src="path/to/your-icon3.png" alt="Data" className="icon" />
            <input type="text" placeholder="Data de ida e volta" />
          </div>
          <div className="input-wrapper">
            <img src="path/to/your-icon4.png" alt="Adulto" className="icon" />
            <input type="text" placeholder="1 adulto" className="input-last" />
          </div>
        </div>
      </Global.Wrap>
    </div>
  );
};

export default SearchContent2;
