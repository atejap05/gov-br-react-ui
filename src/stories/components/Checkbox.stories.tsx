import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../../components/Checkbox";

const meta = {
  title: "components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox",
    id: "checkbox",
    name: "checkbox",
  },
};
