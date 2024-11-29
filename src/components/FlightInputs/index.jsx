const FlightInputs = () => {
  return (
    <div className="form d-flex justify-content-center align-items-center">
      <div className="input-wrapper">
        <img src="/assets/images/idaIcon.png" alt="Local" className="icon" />
        <input
          type="text"
          placeholder="Local de partida?"
          className="input-first"
        />
      </div>
      <div className="input-wrapper">
        <img
          src="/assets/images/chegadaIcon.png"
          alt="Chegada"
          className="icon"
        />
        <input type="text" placeholder="Chegada" />
      </div>
      <div className="input-wrapper">
        <img src="path/to/your-icon3.png" alt="Data" className="icon" />
        <input type="text" placeholder="Data de ida e volta" />
      </div>
      <div className="input-wrapper">
        <img src="path/to/your-icon4.png" alt="Adulto" className="icon" />
        <input type="text" placeholder="1 adulto" className="input-last" />
      </div>
    </div>
  );
};

export default FlightInputs;
