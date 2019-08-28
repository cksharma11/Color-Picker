import React from "react";
import ColorBox from "../ColorBox/ColorBox";

const ColorBoxContainer = ({ colors }) => {
  return (
    <div className="div-color-container">
      {colors.map(color => {
        return (
          <ColorBox
            hexCode={color.colorCode}
            colorName={color.colorName}
            key={color.colorCode}
          />
        );
      })}
    </div>
  );
};

export default ColorBoxContainer;
