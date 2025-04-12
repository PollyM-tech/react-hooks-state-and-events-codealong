import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  console.log({isOn, setIsOn})

  function HandleClick(){
    setIsOn((isOn) => !isOn);
  } 

  return (
  <button Onclick={HandleClick} style={{ background: "red" }} >{isOn ? "ON" : "OFF"} </button>
  
);
}

export default Toggle;

