import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ngunawan/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    className: {
      control: 'text',
      description: 'CSS class name',
    },
    onClick: { action: 'clicked' },
    onPress: { action: 'pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    className: 'bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed',
  },
};

export const Submit: Story = {
  args: {
    children: 'Submit',
    type: 'submit',
    className: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    className: 'bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded text-sm',
  },
};