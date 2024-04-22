import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../../components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Switch",
    id: "switch",
    align: "left",
    icon: false,
    size: "md",
  },
};
