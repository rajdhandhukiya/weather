import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import rainy from "../assets/SVG/rainy.svg";
import clouds from "../assets/SVG/clouds.svg";

import "./Success.css";
function SuccessApp(props) {
  const weatherData = props.location.state.data;
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="successMain">
      <div className="homeMain">
        <Button
          className="homeBtn"
          onClick={() => {
            handleClick(0);
          }}
        >
          Home
        </Button>
      </div>
      <div className="cardMain">
        <div className="card">
          <div className="iconClouds">
            <img
              src={weatherData?.data?.main?.temp.length > 276 ? rainy : clouds}
              alt="clouds"
              className="cloudsIcon"
            />
          </div>
          <div className="temparature">
            <span className="tempDeg">{weatherData?.data?.main?.temp}</span>
          </div>
          <div className="description">
            <span className="fewClouds">
              {weatherData?.data?.weather[0]?.description}
            </span>
          </div>
          <div className="tempMain">
            <div>
              <span className="humidityTxt">
                Humidity: {weatherData?.data?.main?.humidity}%
              </span>
            </div>
            <div>
              <span className="windTxt">
                Wind Speed : {weatherData?.data?.wind?.speed}mph
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="location">
        <div>
          <span className="locat">Location |</span>
        </div>
        <div className="locatLondon">
          <span className="london">{weatherData?.data?.name}</span>
        </div>
      </div>
    </div>
  );
}

export default SuccessApp;
