import React, { useState } from "react";
import Clipboard from "react-clipboard.js";

const ColorBox = ({ haxCode }) => {
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
        style={{ background: `${haxCode}` }}
        onClick={setCopySucess}
      >
        {status}
      </div>
    </Clipboard>
  );
};

export default ColorBox;
