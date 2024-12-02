import styled from "styled-components";
import Header from "../components/header/Header";
import FlightInputs from "../components/FlightInputs";

const Flights = () => {
  return (
    <>
      <Header background={"#605DEC"} />
      <Main>
        {/* <img src="/assets/images/BannerMundi.png"></img> */}
        <FlightInputs />
      </Main>
    </>
  );
};

export default Flights;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url("/assets/images/BannerMundi.png");
  background-size: cover;
  background-position: top;
`;
