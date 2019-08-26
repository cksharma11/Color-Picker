import React, { useState } from "react";
import Clipboard from "react-clipboard.js";

const ColorBox = ({ hexCode, colorName }) => {
  const [status, setStatus] = useState(hexCode);
  const setCopySuccess = () => {
    setStatus("Copied");
    setTimeout(() => {
      setStatus(hexCode);
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
        style={{ background: `${status}` }}
        onClick={setCopySuccess}
      >
        <p>{colorName}</p>
      </div>
    </Clipboard>
  );
};

export default ColorBox;
