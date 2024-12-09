import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 12px;
`;

export const Title = styled.h1`
  max-width: 548px;
  font-size: 64px;
  text-align: center;
  font-weight: 800;
  color: #19747e;
  background: linear-gradient(45deg, #d1e8e2, #19747e, #a9d6e5); /* Gradiente */
  -webkit-background-clip: text; /* Clipa o gradiente ao texto */
  -webkit-text-fill-color: transparent; /* Torna o texto transparente para mostrar o gradiente */
  text-align: center;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  /* flex: 0; */
  width: calc((100% / 2) - 10px);

  &.full {
    width: 100%;
  }

  textarea {
    padding: 6px 12px;
    border: 1px solid rgb(222, 226, 230);
    border-radius: 6px;
    resize: none;
  }
`;

export const Input = styled.input`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgb(222, 226, 230);
`;

export const InputSearchImg = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  input {
    border: 1px solid rgb(222, 226, 230);
    border-radius: 6px;
    outline: none;
    padding: 0 12px;
    flex: 1;
  }

  button {
    border: 1px solid #19747e;
    border-radius: 0 6px 6px 0;
    color: #19747e;

    &:hover {
      background-color: #19747e;
      color: #fff;
      border-color: #19747e;
    }
  }
`;
