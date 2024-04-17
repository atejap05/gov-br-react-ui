import { Meta, StoryObj } from "@storybook/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Input } from "../../../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
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

export const Label: Story = {
  render: () => (
    <Input
      id="input-label"
      label="Label/Rótulo"
      placeholder="Text Something ..."
    />
  ),
};

export const Inline: Story = {
  render: () => (
    <Input
      id="input-inline"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      inline
    />
  ),
};

export const Highlight: Story = {
  render: () => (
    <Input
      id="input-highlight"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      highlight
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Input
      id="input-disabled"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      disabled
    />
  ),
};

export const Password: Story = {
  render: () => (
    <Input
      id="input-password"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      type="password"
    />
  ),
};

export const Search: Story = {
  render: () => (
    <Input
      id="input-search"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      type="search"
      onSearch={value => console.log(value)}
    />
  ),
};

export const Icon: Story = {
  render: () => (
    <Input
      id="input-icon"
      label="Label/Rótulo"
      placeholder="Text Something ..."
      icon={faUser}
    />
  ),
};
