import React from "react";
import "./style.css";

const CryptoCard = props => (
    <div 
      className="card" 
      value={props.id} 
      onClick={() => props.Click(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

  export default CryptoCard;