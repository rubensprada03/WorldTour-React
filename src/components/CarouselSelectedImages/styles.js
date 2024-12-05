import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  max-width: 1440px;
  width: -webkit-fill-available;
  height: 400px;
  margin: 0 auto;
  position: relative;
  overflow-x: auto;
  /* overflow: hidden; */
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
