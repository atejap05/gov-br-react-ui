import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Checkbox",
    id: "checkbox",
    name: "checkbox",
  },
};
