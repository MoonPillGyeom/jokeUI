import type { Meta, StoryObj } from '@storybook/react';
import Tetris from '../components/Tetris/Tetris';

const meta = {
  title: 'UI/Tetris',
  component: Tetris,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tetris>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Small: Story = {
  args: {
    type: 'div',
  },
};
