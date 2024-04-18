import { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input/Size",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input id="input-default" placeholder="Text Something ..." />,
};

export const Small: Story = {
  render: () => (
    <Input id="input-small" placeholder="Text Something ..." size="sm" />
  ),
};

export const Medium: Story = {
  render: () => (
    <Input id="input-medium" placeholder="Text Something ..." size="md" />
  ),
};

export const Large: Story = {
  render: () => (
    <Input id="input-large" placeholder="Text Something ..." size="lg" />
  ),
};
