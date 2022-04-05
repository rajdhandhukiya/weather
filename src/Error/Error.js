import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import locatbanned from "../assets/SVG/locationbanned.png";

import "./Error.css";
function ErrorPage() {
    const history = useHistory()
    const handleClick = () =>{
      history.push('/')
    }
  return (
    <div className="mainError">
      <div className="ErrorCard">
        <div className="locatIcon">
          <img src={locatbanned} alt="locatbanned" />
        </div>
        <div className="errorText">
          <span className="errTxt">
            Whoa! Looks like there was an error <br></br>with your zipcode.{" "}
          </span>
        </div>
        <div className="tryAgain">
          <Button className="tryEror" onClick={()=>{
              handleClick()
          }}>Try Again</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
