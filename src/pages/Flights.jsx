import styled from "styled-components";
import Header from "../components/header/Header";
import FlightInputs from "../components/FlightInputs";

const Flights = () => {
  return (
    <>
      <Header background={"#19747E"} />
      <Main>
        <Flight>
          <FlightInputs />
        </Flight>
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

export const Flight = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
