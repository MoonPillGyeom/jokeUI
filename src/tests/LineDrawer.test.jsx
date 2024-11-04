import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LineDrawer from '../components/LineDrawer';

describe('LineDrawer Component', () => {
  test('canvas to see line', () => {
    const { getByTestId } = render(<LineDrawer />);
    const canvas = getByTestId('canvas');

    fireEvent.mouseDown(canvas, { clientX: 50, clientY: 50 });
    fireEvent.mouseMove(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseUp(canvas);

    const context = canvas.getContext('2d');
    expect(context.__getDrawCalls()).toMatchSnapshot(); // jest-canvas-mock을 통해 호출 내용 확인
  });
  test('Clike AllEareaButton to clear canvas', () => {
    const { getByTestId, getByText } = render(<LineDrawer />);

    const canvas = getByTestId('canvas');

    // 캔버스에 선을 그리는 시뮬레이션
    fireEvent.mouseDown(canvas, { clientX: 50, clientY: 50 });
    fireEvent.mouseMove(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseUp(canvas);

    const eraserButton = getByText('Allearea');
    fireEvent.click(eraserButton);

    const context = canvas.getContext('2d');

    expect(context.__getDrawCalls()).toMatchSnapshot(); // __getDrawCalls()함수를 이용해 clearRect가 실행되었는지 확인
  });
});
