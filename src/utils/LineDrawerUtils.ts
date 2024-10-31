import { useState } from 'react';

interface LineDrawerUtilsProps {
  contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>;
}

const LineDrawerUtils = ({ contextRef }: LineDrawerUtilsProps) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const handleStartDrawing = ({ nativeEvent }: any) => {
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      setIsDrawing(true);
    }
    nativeEvent.preventDefault();
  };

  const handleDraw = ({ nativeEvent }: any) => {
    if (!isDrawing || !contextRef.current) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const handleStopDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  return { handleStartDrawing, handleDraw, handleStopDrawing };
};
export default LineDrawerUtils;
