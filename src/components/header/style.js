import styled from 'styled-components';


export const HeaderWrap = styled.header`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between; 
  align-items: center;  
  padding: 20px 0; 
`;

export const Logo = styled.div`
  img {
    height: 50px;   
    width: auto;    
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: 20px;  
`;

export const MenuItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #7C8DB0;
  font-size: 16px;
  &:hover {
    color: #086D7A;  
  }
`;
