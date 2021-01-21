import React, { useState } from 'react';
import Clipboard from 'react-clipboard.js';

const ColorBox = ({ hexCode, colorName }) => {
  const [status, setStatus] = useState(colorName);
  const [activeClass, setActiveClass] = useState('div-colorbox');
  const setCopySuccess = () => {
    setStatus('Copied');
    setActiveClass('copied');
    setTimeout(() => {
      setStatus(colorName);
      setActiveClass('div-colorbox');
    }, 1000);
  };

  return (
    <Clipboard
      data-clipboard-text={hexCode}
      style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}
    >
      <div
        id={hexCode}
        className={activeClass}
        data-hover={hexCode}
        style={{ background: `${hexCode}` }}
        onClick={setCopySuccess}
      >
        {status}
      </div>
    </Clipboard>
  );
};

export default ColorBox;
