import React, { useState } from "react";
import Clipboard from "react-clipboard.js";

const ColorBox = ({ hexCode, colorName }) => {
  const [status, setStatus] = useState(colorName);
  const setCopySuccess = () => {
    setStatus("Copied");
    setTimeout(() => {
      setStatus(colorName);
    }, 1000);
  };

  return (
    <Clipboard
      data-clipboard-text={hexCode}
      style={{ background: "none", border: "none", fontFamily: "inherit" }}
    >
      <div
        id={hexCode}
        className="div-colorbox"
        style={{ background: `${hexCode}` }}
        onClick={setCopySuccess}
      >
        {status}
      </div>
    </Clipboard>
  );
};

export default ColorBox;
