import React from "react";
import "./Flip.css";

function FlipCoin() {
  const [isHeads, setIsHeads] = React.useState(true);

  const handleClick = () => {
    setIsHeads((prevState) => !prevState);
  };

  return (
    <div className="flip-coin-container" onClick={handleClick}>
      <div className={`flip-coin ${isHeads ? "tails" : "heads"}`}>
        <div className="front"></div>
        <div className="back"></div>
      </div>
    </div>
  );
}

export default FlipCoin;