import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bmi, category } = location.state || {};

  let image = "";
  if(category==="Underweight") {
    image="https://cdn-icons-png.flaticon.com/512/2922/2922506.png";
  } 
  else if(category==="Normal") {
    image="https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
  } 
  else if (category === "Overweight") {
    image="https://cdn-icons-png.flaticon.com/512/2922/2922508.png";
  } 
  else {
    image="https://cdn-icons-png.flaticon.com/512/2922/2922515.png";
  }
return (
    <div className="bmi-container">
  <h2>Your BMI Result</h2>
  <div className="result-box">
    <h3>Your BMI:{bmi}</h3>
    <h3>Category:{category}</h3>
    <img src={image} alt={category} />
  </div>

  <button onClick={()=>navigate("/")}>
    Calculate Again
  </button>
</div>

  );
}
export default Result;