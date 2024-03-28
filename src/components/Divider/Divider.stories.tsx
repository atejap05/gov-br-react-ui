import { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  decorators: [
    Story => (
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          width: "50rem",
          height: "8rem",
          backgroundColor: "#f0f0f0",
        }}
      >
        {Story()}
      </div>
    ),
  ],

  argTypes: {
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
    dashed: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Description */
  args: {},
};
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    size: "md",
    dashed: false,
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    size: "md",
    dashed: false,
  },
};
