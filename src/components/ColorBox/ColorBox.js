import React, { useState } from "react";
import Clipboard from "react-clipboard.js";

const ColorBox = ({ haxCode, colorName }) => {
  const [status, setStatus] = useState(colorName);
  const setCopySuccess = () => {
    setStatus("Copied");
    setTimeout(() => {
      setStatus(colorName);
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
        style={{ background: `${haxCode}` }}
        onClick={setCopySuccess}
      >
        {status}
      </div>
    </Clipboard>
  );
};

export default ColorBox;
