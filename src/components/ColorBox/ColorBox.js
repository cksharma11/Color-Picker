import React, { useState } from "react";
import Clipboard from "react-clipboard.js";

const ColorBox = ({ haxCode, colorName }) => {
  const [status, setStatus] = useState(haxCode);
  const setCopySucess = () => {
    setStatus("Copied");
    setTimeout(() => {
      setStatus(haxCode);
    }, 1000);
  };

  return (
    <Clipboard
      data-clipboard-text={haxCode}
      style={{ background: "none", border: "none", fontFamily: "inherit" }}
    >
      <div
        id={haxCode}
        className="div-colorbox"
        style={{ background: `${status}` }}
        onClick={setCopySucess}
      >
        <p>{colorName}</p>
      </div>
    </Clipboard>
  );
};

export default ColorBox;
