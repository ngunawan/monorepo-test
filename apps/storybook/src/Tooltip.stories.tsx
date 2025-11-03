import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProvider, Button } from "@ngunawan/ui";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip content="This tooltip has a longer delay" delayDuration={1000}>
      <Button>Hover me (1s delay)</Button>
    </Tooltip>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        placeItems: "center",
      }}
    >
      <Tooltip content="Top tooltip" side="top">
        <Button size="small">Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button size="small">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button size="small">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button size="small">Left</Button>
      </Tooltip>
    </div>
  ),
};
