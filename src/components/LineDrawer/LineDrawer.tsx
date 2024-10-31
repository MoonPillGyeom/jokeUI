import React, { useEffect, useRef, useState } from 'react';
import Pallet from '../Pallet/Pallet';
import LineDrawerUtils from '../../utils/LineDrawerUtils';

export default function LineDrawer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [penWidth, setPenWidth] = useState(1);
  const [color, setColor] = useState('black');
  const { handleStartDrawing, handleDraw, handleStopDrawing } = LineDrawerUtils({ contextRef });
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      context.lineCap = 'round';
      context.strokeStyle = `${color}`;
      context.lineWidth = Number(`${penWidth}`);
      contextRef.current = context;
    }
  }, [penWidth, color]);

  return (
    <div>
      <Pallet contextRef={contextRef} setColor={setColor} setPenWidth={setPenWidth} />
      <canvas
        style={{ backgroundColor: '#eee' }}
        ref={canvasRef}
        width={1000}
        height={800}
        onMouseDown={handleStartDrawing}
        onMouseMove={handleDraw}
        onMouseUp={handleStopDrawing}
      />
    </div>
  );
}
