import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../../components/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Success: Story = {
  args: {
    feedback: {
      status: "success",
      message: "This is a success message",
    },

    label: "Success Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Info: Story = {
  args: {
    feedback: {
      status: "info",
      message: "This is an info message",
    },

    label: "Info Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Warning: Story = {
  args: {
    feedback: {
      status: "warning",
      message: "This is a warning message",
    },

    label: "Warning Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const Danger: Story = {
  args: {
    feedback: {
      status: "danger",
      message: "This is a danger message",
    },

    label: "Danger Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 100,
    label: "Limited Textarea label",
    placeholder: "Type something here",
    helperText: "This is a helper text",
  },
};
