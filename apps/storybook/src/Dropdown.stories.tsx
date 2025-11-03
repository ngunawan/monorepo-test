import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownItemWithStyles,
  DropdownSeparatorWithStyles,
  Button,
} from "@ngunawan/ui";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown trigger={<Button>Open Menu</Button>}>
      <DropdownItemWithStyles>Profile</DropdownItemWithStyles>
      <DropdownItemWithStyles>Settings</DropdownItemWithStyles>
      <DropdownSeparatorWithStyles />
      <DropdownItemWithStyles>Logout</DropdownItemWithStyles>
    </Dropdown>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Dropdown trigger={<Button variant="secondary">Actions</Button>}>
      <DropdownItemWithStyles onSelect={() => alert("Edit clicked")}>
        Edit
      </DropdownItemWithStyles>
      <DropdownItemWithStyles onSelect={() => alert("Copy clicked")}>
        Copy
      </DropdownItemWithStyles>
      <DropdownItemWithStyles onSelect={() => alert("Delete clicked")}>
        Delete
      </DropdownItemWithStyles>
    </Dropdown>
  ),
};
