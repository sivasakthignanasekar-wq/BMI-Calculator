import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const navigate = useNavigate();

  function calculate(e) {
            e.preventDefault();
 if(!weight||!height) {
      alert("Enter weight and height");
          return;
 }

    let weightInKg = weight;
    let heightInMeters;

    if(unit==="metric") {
      heightInMeters=height/100;
} else
   {
      weightInKg=weight*0.453592; 
      heightInMeters=height*0.0254; 
    }
const bmiValue=(
      weightInKg/(heightInMeters*heightInMeters)
    ).toFixed(2);

 let message = "";

if(bmiValue<18.5) {
      message="Underweight";
    } 
    else if(bmiValue>=18.5 && bmiValue<25) {
      message ="Normal";
    } else if(bmiValue>=25 && bmiValue<30) {
      message="Overweight";
    } else {
      message="Obese";
    }
navigate("/result", {
      state:{ bmi: bmiValue,category: message}
    });
  }

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <form onSubmit={calculate}>
        {/* Unit Selector */}
        <select value={unit} onChange={(e)=>setUnit(e.target.value)}>
          <option value="metric">Metric (kg, cm)</option>
          <option value="imperial">Imperial (lb, in)</option>
        </select>

        <input type="number"placeholder={ unit==="metric"?"Enter weight (kg)": "Enter weight (lb)"} value={weight}onChange={(e)=>setWeight(e.target.value)}/>
        <input type="number"placeholder={unit==="metric"? "Enter height (cm)": "Enter height (inches)"}value={height}onChange={(e) => setHeight(e.target.value)}/>
 <button type="submit">Calculate</button>
      </form>
    </div>
  );
}
export default Bmi;