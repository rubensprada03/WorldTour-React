import React from 'react';
import '../SearchContent/style.css';  
import Logo from '../../assets/images/new.png';  
import * as Global from '../../assets/css/global';  

const SearchContent = () => {
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
        <div className="main-content">
          <div className="left-content">
            <h1 className='title-wt'>World Tours</h1>
            <p className='desc-wt'>This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review.</p>
          </div>
          <div className="right-content">
            
          </div>
        </div>
      </Global.Wrap>
    </div>
  );
};

export default SearchContent;
