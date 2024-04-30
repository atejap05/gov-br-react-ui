import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/Alert";

const meta: Meta<typeof Alert> = {
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
};

export default meta;

type Story = StoryObj<typeof Alert>;

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
