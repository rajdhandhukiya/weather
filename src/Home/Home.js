import axios from "axios";
import { Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./Home.css";
function HomeApp() {
  const [input, setInput] = useState();
  const history = useHistory();

  const handleClick = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/zipcode/${input}`);

      if (result?.data) {
        history.push("/SuccessApp", {data: result.data});
      } else {
        history.push("/ErrorPage");
      }
    } catch (error){
      console.log(error);
      history.push("/ErrorPage");
    }
  };
  return (
    <div className="homeMain">
      <div className=" weatherMain">
        <div className="weatherHeader">
          <span>
            <h1 className="forcast">Weather Forcast</h1>
          </span>
        </div>
        <div className="zipcode">
          <span className="zipcodeFont">
            Enter a Norwegian zipcode below to get the <br></br> current weather
            conditions for that area.
          </span>
        </div>
        <div className="inputMain">
          <div className="inputFields">
            <input
              className="inputData"
              placeholder="Enter zipcode"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div>
            <Button
              className="enterButton"
              onClick={() => {
                handleClick();
              }}
            >
              ENTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeApp;
