import React from 'react';
import * as Global from '../../assets/css/global';  
import * as S from '../header/style'; 
import Logo from '../../assets/images/Logo.png'

const Header = () => {
  return (
    <Global.ContentWrap backgroundColor="transparent">
      <S.HeaderWrap>
        <S.Logo>
          <img src={Logo} alt="Logo" />
        </S.Logo> 
        <S.Menu>
          <S.MenuItem>Voos</S.MenuItem>
          <S.MenuItem>Hotéis</S.MenuItem>
          <S.MenuItem>Bagagens</S.MenuItem>
          <S.MenuItem>Entrar</S.MenuItem>
        </S.Menu>
      </S.HeaderWrap>
    </Global.ContentWrap>
  );
}

export default Header;
