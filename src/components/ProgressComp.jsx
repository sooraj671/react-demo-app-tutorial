import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import './ProgressComp.css'
const ProgressComp = () => {
  let progValue = 10;

  const [prog, setProg] = useState(10);

  // useEffect(() => {
  //   setProg((prev) => {
  //     return prev + 10;
  //   });
  // }, prog);

  
  

  const handleClick = () => {
    setProg((prevCount) =>  prevCount + 5);
  };
  const handleNegaClick = () => {
    setProg((prevCount) =>  prevCount - 5);
  };
  return (
    <div>
      <ProgressBar now={prog} />
      <div className="buttons">
      <Button onClick={handleClick}>
        +
      </Button>
      <Button onClick={handleNegaClick}>
        -
      </Button>
      </div>
    </div>
  );
};

export default ProgressComp;
