import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CSS_FIles/Work.css";

export default function Work(props) {
  return (
    <div className="WorkOverall">
      <div className="UpperPart">
        <img src={props.url} id="Title_Logo" alt="Image Here" />
        <h1>{props.title}</h1>
      </div>

      <div className="LowerPart">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quos pariatur quam! Id, soluta repellendus! Sit laboriosam eveniet
          quis, perspiciatis architecto debitis sequi nostrum soluta voluptates
          temporibus provident doloremque veritatis.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
