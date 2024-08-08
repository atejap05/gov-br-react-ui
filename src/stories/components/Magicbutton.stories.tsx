import { Meta, StoryObj } from "@storybook/react";
import { Magicbutton } from "../../components/Magicbutton";

const meta: Meta<typeof Magicbutton> = {
  title: "components/Magicbutton",
  component: Magicbutton,
  tags: ["autodocs"],

  decorators: [
    Story => (
      <div
        style={{
          width: "100%",
          height: "12rem",
        }}
      >
        {Story()}
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
    position: {
      control: {
        type: "radio",
        options: [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "center-left",
          "center-right",
          "center-bottom",
          "center-top",
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Magicbutton>;

export const Template: Story = {
  args: {
    label: "Button",
  },
};
