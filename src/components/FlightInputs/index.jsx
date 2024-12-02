import * as C from "./styles";

const FlightInputs = ({ color }) => {
  return (
    <C.Container className="flight-inputs form d-flex justify-content-center align-items-center">
      <C.InputWrapper className="input-wrapper">
        <img src="/assets/images/idaIcon.png" alt="Local" className="icon" />
        <C.Input
          type="text"
          placeholder="Local de partida?"
          className="input-first"
        />
      </C.InputWrapper>
      <C.InputWrapper className="input-wrapper">
        <img
          src="/assets/images/chegadaIcon.png"
          alt="Chegada"
          className="icon"
        />
        <C.Input type="text" placeholder="Chegada" />
      </C.InputWrapper>
      <C.InputWrapper className="input-wrapper">
        <img
          src="/assets/images/calendarIcon.png"
          alt="Data"
          className="icon"
        />
        <C.Input type="text" placeholder="Data de ida e volta" />
      </C.InputWrapper>
      <C.InputWrapper className="input-wrapper">
        <img
          src="/assets/images/personIcon.png"
          alt="Adulto"
          className="icon"
        />
        <C.Input type="text" placeholder="1 adulto" className="input-last" />
      </C.InputWrapper>
      <C.ButtonAction>Buscar</C.ButtonAction>
    </C.Container>
  );
};

export default FlightInputs;
