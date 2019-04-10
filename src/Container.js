import React from "react";
import CSS from "./container.css"

const Container = props =>
  <div className={`Container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;
  

export default Container;