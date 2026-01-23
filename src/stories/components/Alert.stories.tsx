import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "../../components/Alert";

const meta = {
  title: "components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["danger", "info", "success", "warning"],
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: "success",
    text: "This is a success message",
  },
};

export const Info: Story = {
  args: {
    status: "info",
    text: "This is an info message",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    text: "This is a warning message",
  },
};

export const Danger: Story = {
  args: {
    status: "danger",
    text: "This is a danger message",
  },
};
