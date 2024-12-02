import React from "react";
import "../../Styles/style.css";
import * as Global from "../../Styles/global";
import Header from "../header/Header";
import FlightInputs from "../FlightInputs";

const SearchContent = () => {
  return (
    <div className="search-content">
      <Header />
      <Global.Wrap>
        <div className="main-content">
          <div className="left-content">
            <h1 className="title-wt">World Tours</h1>
            <p className="desc-wt">
              This text presents my research journey on the topic of Music and
              Tourism Imaginaries and gives the context which led to the
              publication of this special issue of Via Tourism Review.
            </p>
          </div>
          <div className="right-content"></div>
        </div>
        <FlightInputs />
      </Global.Wrap>
    </div>
  );
};

export default SearchContent;
