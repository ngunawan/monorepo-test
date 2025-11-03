import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ngunawan/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button content",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
      description: "Button variant",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Button size",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Button type",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
    },
    onClick: { action: "clicked" },
    onPress: { action: "pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    children: "Custom Button",
    className: "shadow-lg",
  },
};
