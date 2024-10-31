import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  afterEach(() => cleanup());

  it('renders', () => {
    render(<Button data-testid='btn' />);
    const button = screen.getByTestId('btn');

    expect(button).toBeInTheDocument();
  });

  it('fires an event on onClick', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} data-testid='btn' />);

    const button = screen.getByTestId('btn');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('renders the correct classes', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} data-testid='p-btn' />);

    const pBtn = screen.getByTestId('p-btn');
    expect(pBtn).toHaveClass('text-white');
  });

  it('button color is red?', () => {
    render(<Button data-testid='p-btn' className='bg-white' />);
    const pBtn = screen.getByTestId('p-btn');
    const styles = window.getComputedStyle(pBtn);
    expect(styles.backgroundColor).toBe('white');
  });
});
