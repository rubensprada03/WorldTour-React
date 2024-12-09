import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${(props) => props.marginTop};
  row-gap: 32px;
`;

export const ContentWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) =>
    props.backgroundColor || "transparent"}; // Cor de fundo com fallback
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Form = styled.form`
  max-width: 1440px;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 48px;

  label {
    padding-left: 8px;
    font-weight: 500;
    color: #19747e;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 12px;
  max-width: 1440px;
  width: -webkit-fill-available;

  h2 {
    padding-left: 24px;
    color: #6e7491;
    font-size: 24px;
    font-weight: 600;

    span {
      color: #19747e;
    }
  }
`;

export const ImagesArea = styled.section`
  max-width: calc(1440px - 48px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  padding: 24px;
  max-height: 342px;
  column-gap: 16px;
  row-gap: 24px;
  overflow-y: auto;
  justify-content: space-between;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 8px;
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

export const ImgCard = styled.div`
  width: 240px;
  height: 135px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px #e2e2e2;
  position: relative;

  &:hover {
  }

  img {
    object-fit: contain;
    border-radius: 12px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 8px;
    right: 24px;
    width: 16px;
    height: 16px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    background-color: #e2e2e280;
    transition: all 300ms ease-in-out;
    /* background-color: transparent; */

    img {
      opacity: 0;
    }

    &:hover {
      border-color: #d1e8e2;
      background-color: #d1e8e2dd;
    }

    &.selected {
      border-color: #d1e8e2;
      background-color: #d1e8e2;
      img {
        opacity: 1;
      }
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
