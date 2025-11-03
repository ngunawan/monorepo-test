import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, Button } from "@ngunawan/ui";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog
      trigger={<Button>Open Dialog</Button>}
      title="Example Dialog"
      description="This is an example dialog using Radix UI."
    >
      <p>This is the dialog content. You can put any content here.</p>
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "flex-end",
          marginTop: "24px",
        }}
      >
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    </Dialog>
  ),
};

export const WithoutDescription: Story = {
  render: () => (
    <Dialog trigger={<Button>Open Simple Dialog</Button>} title="Simple Dialog">
      <p>This dialog has no description.</p>
    </Dialog>
  ),
};
