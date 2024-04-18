import { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input/Feedback",
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

export const Success: Story = {
  render: () => (
    <Input
      id="input-success"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      status="success"
      feedback="Success Message"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <Input
      id="input-info"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      status="info"
      feedback="Info Message"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <Input
      id="input-warning"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      status="warning"
      feedback="Warning Message"
    />
  ),
};

export const Danger: Story = {
  render: () => (
    <Input
      id="input-danger"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      status="danger"
      feedback="Danger Message"
    />
  ),
};
