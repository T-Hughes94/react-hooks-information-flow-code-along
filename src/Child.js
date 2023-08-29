import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

function handleCLick(){
  const newColor = getRandomColor()
  onChangeColor(newColor)
}

  return <div 
  onClick={handleCLick}
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
