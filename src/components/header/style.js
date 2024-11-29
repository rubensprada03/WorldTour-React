import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px 20px;
  z-index: 1000;
  margin: 0 auto;

  /* Background degradê */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.001)
  );
`;

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

export const Menu = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin-left: 45px;
    font-size: 1rem;
    font-weight: 400;
    transition: color 0.3s ease, text-decoration 0.3s ease; /* Adiciona transição */
  }

  a:hover {
    color: #7c8db0;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #7c8db0;
  font-size: 16px;
  &:hover {
    color: #086d7a;
  }
`;
