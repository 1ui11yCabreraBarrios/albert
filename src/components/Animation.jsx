import React from "react";
import { MDBAnimation } from "mdbreact";
// import pikachu from "../assets/img/poke.png";

const Animation = () => {
  return (
    <MDBAnimation type="bounce" infinite>
      <img className="img-fluid" alt="" src="/assets/img/poke.png" />
    </MDBAnimation>
  );
};

export default Animation;




