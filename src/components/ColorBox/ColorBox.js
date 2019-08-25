import React from "react";
import Clipboard from "react-clipboard.js";

const ColorBox = ({ haxCode }) => {
  return (
    <Clipboard
      data-clipboard-text={haxCode}
      style={{ background: "none", border: "none", fontFamily: "inherit" }}
    >
      <div
        id={haxCode}
        className="div-colorbox"
        style={{ background: `${haxCode}` }}
      >
        {haxCode}
      </div>
    </Clipboard>
  );
};

export default ColorBox;
