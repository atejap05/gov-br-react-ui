import { Meta, StoryObj } from "@storybook/react";
import { Message } from "../../components/Message";

const meta: Meta<typeof Message> = {
  title: "components/Message",
  component: Message,
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

type Story = StoryObj<typeof Message>;

export const Info: Story = {
  args: {
    title: "This is a title.",
    message: "This is a info message",
    status: "info",
  },
};

export const Success: Story = {
  args: {
    title: "This is a title.",
    message: "This is a success message",
    status: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "This is a title.",
    message: "This is a warning message",
    status: "warning",
  },
};

export const Danger: Story = {
  args: {
    title: "This is a title.",
    message: "This is a danger message",
    status: "danger",
  },
};
