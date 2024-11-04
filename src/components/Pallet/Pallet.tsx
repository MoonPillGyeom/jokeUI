import React, { useState } from 'react';
import Button from '../Button';
import PalletUtils from '../../utils/PalletUtils';
import { PenWidthUtils, penColor } from '../../utils/PenWCUtils';

interface PalletProps {
  contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setPenWidth: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pallet({ contextRef, setColor, setPenWidth }: PalletProps) {
  const [isColorList, setIsColorList] = useState(false);
  const { handleDraw, handleEraser, handleAllEraser, handlePenColor, handlePenWidth } = PalletUtils({
    contextRef,
    setColor,
    setPenWidth,
  });
  const handleClickColor = () => {
    setIsColorList(!isColorList);
  };
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <Button onClick={handleAllEraser}>Allearea</Button>
      <Button onClick={handleEraser}>Earea</Button>
      <Button onClick={handleDraw}>Draw</Button>
      <Button onClick={handleClickColor}>Color</Button>
      {isColorList &&
        penColor.map((color, index) => (
          <Button onClick={() => handlePenColor(color)} key={index} style={{ backgroundColor: color }}>
            {color}
          </Button>
        ))}
      <label htmlFor='penWidth'>Choose a penWidth:</label>
      <select id='penWidth' name='penWidth' onChange={handlePenWidth}>
        {PenWidthUtils.map((width, index) => (
          <option value={width} key={index}>
            {width}
          </option>
        ))}
      </select>
    </div>
  );
}
