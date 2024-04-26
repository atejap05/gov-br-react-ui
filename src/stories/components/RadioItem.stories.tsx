import { Meta, StoryObj } from "@storybook/react";
import { RadioItem } from "../../components/Radio";

const meta: Meta<typeof RadioItem> = {
  title: "components/RadioItem",
  component: RadioItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RadioItem>;

export const Default: Story = {
  args: {
    id: "radio",
    label: "Radio Item",
    name: "radio",
    value: "radio",
  },
};
