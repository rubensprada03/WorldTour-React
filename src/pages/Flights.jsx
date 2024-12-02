import styled from "styled-components";
import Header from "../components/header/Header";
import FlightInputs from "../components/FlightInputs";
import { recommendations } from "../data/recommendations";

const Flights = () => {
  return (
    <>
      <Header background={"#19747E"} />
      <Main>
        <Flight>
          <h1>It’s more than just a trip</h1>
          <FlightInputs />
        </Flight>
      </Main>
      <Recommendations>
        <div className="row-div">
          <h2>
            Encontre a sua próxima aventura com estas{" "}
            <span>ofertas de voos</span>
          </h2>
          <button>
            Ver tudo <img src="/assets/images/seta.png" alt="" />
          </button>
        </div>
        <RowRecommendations>
          {recommendations.slice(0, 3).map((item, key) => (
            <Card>
              <ImgArea background={item.img}></ImgArea>
              <InfosCard>
                <div>
                  <h3>
                    {item.city}, <span>{item.state}</span>
                  </h3>
                  <p>${item.price}</p>
                </div>
                <p>{item.desc}</p>
              </InfosCard>
            </Card>
          ))}
        </RowRecommendations>
        {recommendations.length >= 4 && (
          <CardFull>
            <ImgArea background={recommendations[3].img}></ImgArea>
            <InfosCard>
              <div>
                <h3>
                  {recommendations[3].city} -{" "}
                  <span>{recommendations[3].state}</span>
                </h3>
                <p>${recommendations[3].price}</p>
              </div>
              <p>{recommendations[3].desc}</p>
            </InfosCard>
          </CardFull>
        )}
      </Recommendations>
      <Recommendations>
        <div className="row-div">
          <h2>
            Explore lugares únicos para <span>estar</span>
          </h2>
          <button>
            Ver tudo <img src="/assets/images/seta.png" alt="" />
          </button>
        </div>
        <RowRecommendations>
          {recommendations.slice(0, 3).map((item, key) => (
            <Card>
              <ImgArea background={item.img}></ImgArea>
              <InfosCard>
                <div>
                  <h3>
                    {item.city}, <span>{item.state}</span>
                  </h3>
                  <p>${item.price}</p>
                </div>
                <p>{item.desc}</p>
              </InfosCard>
            </Card>
          ))}
        </RowRecommendations>
      </Recommendations>
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

const Flight = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 96px;

  h1 {
    max-width: 756px;
    font-size: 96px;
    text-align: center;
    font-weight: 800;
    color: #19747e;
    background: linear-gradient(
      45deg,
      #d1e8e2,
      #19747e,
      #a9d6e5
    ); /* Gradiente */
    -webkit-background-clip: text; /* Clipa o gradiente ao texto */
    -webkit-text-fill-color: transparent; /* Torna o texto transparente para mostrar o gradiente */
    text-align: center;
  }
`;

const Recommendations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 128px auto;
  max-width: 1440px;
  row-gap: 56px;

  h2 {
    color: #6e7491;
    font-size: 24px;
    font-weight: 700;

    span {
      color: #19747e;
    }
  }

  button {
    width: auto;
    background-color: transparent;
    border: none;
    color: #a1b0cc;
    font-size: 24px;
    font-weight: 400;

    img {
      width: 20px;
      height: 15px;
    }
  }
`;

const RowRecommendations = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  width: 100%;
  /* max-width: 1440px; */
`;

const Card = styled.article`
  border-radius: 12px;
  width: calc((100% / 3) - 16px);
  box-shadow: 0 12px 32px #0000000d, 0 2px 4px #1c054d1a;
`;
const CardFull = styled.article`
  border-radius: 12px;
  width: 100%;
  /* width: calc(100% - 40px); */
  box-shadow: 0 12px 32px #0000000d, 0 2px 4px #1c054d1a;
`;

const ImgArea = styled.div`
  border-radius: 12px 12px 0 0;
  background-image: url(${(props) => props.background});
  width: 100%;
  height: 397px;
  background-size: cover;
  background-position: center;
`;

const InfosCard = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      color: #6e7491;

      span {
        color: #19747e;
      }
    }
  }

  p {
    color: #6e7491;
    font-weight: 400;
    font-size: 16px;
  }
`;
