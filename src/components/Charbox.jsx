import React, { useState } from 'react';

const Charbox = ({ char }) => {
  const [charBox, setCharBox] = useState({
    left: `${char.x1}%`,
    top: `${char.y1}%`,
    width: `${char.x2 - char.x1}%`,
    height: `${char.y2 - char.y1}%`,
    border: "2px solid red"
  });
  return (
    <div
      className="char-box"
      data-name={char.name}
      style={charBox}
    ></div>
  );
};
export default Charbox;