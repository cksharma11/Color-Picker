import React from "react";

const ColorBox = ({ haxCode }) => {
  const copyToClipboard = () => {};

  return (
    <div
      id={haxCode}
      className="div-colorbox"
      style={{ background: `${haxCode}` }}
      onClick={copyToClipboard}
    >
      {haxCode}
    </div>
  );
};

export default ColorBox;
