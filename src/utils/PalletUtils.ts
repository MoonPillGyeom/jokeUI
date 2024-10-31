interface PalletUtilsProps {
  contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setPenWidth: React.Dispatch<React.SetStateAction<number>>;
}

const PalletUtils = ({ contextRef, setColor, setPenWidth }: PalletUtilsProps) => {
  const handleDraw = () => {
    if (contextRef.current) {
      contextRef.current.globalCompositeOperation = 'destination-over';
    }
  };

  const handleEraser = () => {
    if (contextRef.current) {
      contextRef.current.globalCompositeOperation = 'destination-out';
    }
  };

  const handleAllEraser = () => {
    if (contextRef.current) {
      contextRef.current.clearRect(0, 0, 1000, 800);
    }
  };

  const handlePenColor = (penColor: string) => {
    setColor(penColor);
  };

  const handlePenWidth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const penWidth = e.target.value;
    setPenWidth(Number(penWidth));
  };

  return { handleDraw, handleEraser, handleAllEraser, handlePenColor, handlePenWidth };
};

export default PalletUtils;
