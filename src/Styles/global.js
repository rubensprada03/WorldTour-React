import styled from "styled-components";

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
