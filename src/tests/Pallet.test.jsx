import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pallet from '../components/Pallet';
import { penColor, PenWidthUtils } from '../utils/PenWCUtils';

describe('Pallet Component', () => {
  const mockContextRef = { current: null };
  const mockSetColor = jest.fn();
  const mockSetPenWidth = jest.fn();

  // Pallet 컴포넌트 랜더링되는지 확인
  test('renders Pallet component', () => {
    render(<Pallet contextRef={mockContextRef} setColor={mockSetColor} setPenWidth={mockSetPenWidth} />);
    expect(screen.getByText('Allearea')).toBeInTheDocument();
    expect(screen.getByText('Earea')).toBeInTheDocument();
    expect(screen.getByText('Draw')).toBeInTheDocument();
    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose a penWidth:')).toBeInTheDocument();
  });

  // 색상 목록이 표시되는지 확인
  test('Click to see color', () => {
    render(<Pallet contextRef={mockContextRef} setColor={mockSetColor} setPenWidth={mockSetPenWidth} />);
    const colorButton = screen.getByText('Color');
    fireEvent.click(colorButton);

    expect(screen.getByText(penColor[0])).toBeInTheDocument();
  });

  // 펜 두께 선택시 setPenWidth 호출 확인
  test('Click setPenWidth to see penWidth', () => {
    render(<Pallet contextRef={mockContextRef} setColor={mockSetColor} setPenWidth={mockSetPenWidth} />);
    const select = screen.getByLabelText('Choose a penWidth:');
    fireEvent.change(select, { target: { value: PenWidthUtils[1] } }); // change시 select를 PenWidthUtils[1]을 설정
    expect(mockSetPenWidth).toHaveBeenCalledWith(PenWidthUtils[1]); // setPenWidth의 값이 PenWidthUtils[1]의 값이 되었는지 확인
  });
});
