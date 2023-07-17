import React, { useState } from "react";
import myImage from "../Assets/pexels-nemuel-sereti-6424589.jpg";

import "./UpdateVariable.css";

const UpdateVariable = () => {
  const [space, setSpace] = useState("10px");
  const [color, setColor] = useState("#ffc600");
  const [blur, setBlur] = useState("10px");

  // Handling Space
  const spaceHandler = (event) => {
    setSpace(event.target.value + "px");
  };
  // Handling Color
  const colorHandler = (event) => {
    setColor(event.target.value);
  };

  // Handling Blur

  const blurHandler = (event) => {
    setBlur(event.target.value + "px");
  };

  return (
    <div>
      <h2>
        Update CSS Styles with <span style={{ color: color }}>React</span>
      </h2>

      <div className="controls">
        <label for="spacing">Spacing:</label>
        <input
          onChange={spaceHandler}
          value={parseInt(space)}
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          defaultValue="10"
          data-sizing="px"
        />

        <label for="blur">Blur:</label>
        <input
          onChange={blurHandler}
          value={parseInt(blur)}
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          defaultValue="10"
          data-sizing="px"
        />

        <label id="base" for="base">
          Base Color
        </label>
        <input
          onChange={colorHandler}
          id="base"
          type="color"
          name="base"
          value={color}
        />
      </div>

      <img
        style={{
          backgroundColor: color,
          padding: space,
          filter: `blur(${blur})`,
        }}
        src={myImage}
        alt="Mountain"
      />
    </div>
  );
};

export default UpdateVariable;
