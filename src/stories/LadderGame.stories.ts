import type { Meta, StoryObj } from '@storybook/react';
import PaintBoard from '../components/PaintBoard/PaintBoard';

const meta = {
  title: 'UI/PaintBoard',
  component: PaintBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaintBoard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Small: Story = {
  args: {
    type: 'div',
  },
};
