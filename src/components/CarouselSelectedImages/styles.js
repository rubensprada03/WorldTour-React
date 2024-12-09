import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  max-width: 1440px;
  width: -webkit-fill-available;
  height: 180px;
  margin-bottom: 10px;
  margin: 0 auto;
  position: relative;
  overflow-x: auto;
  /* overflow: hidden; */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    border-radius: 12px; /* Largura da barra */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Cor do fundo */
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a9d6e5; /* Cor do polegar */
    border-radius: 12px;
  }
`;

export const Card = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  position: absolute;
  transition: all 0.5s ease-in-out;
  left: ${(props) => props.positionX}px;
  z-index: 99;

  button {
    background-color: transparent;
    border: none;
  }
`;
