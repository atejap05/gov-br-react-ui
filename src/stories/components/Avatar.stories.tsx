import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
    icon: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "md",
    src: "https://avatars.githubusercontent.com/u/67137854?v=4",
    alt: "Fulano da Silva",
    icon: false,
  },
};

export const Icon: Story = {
  args: {
    size: "md",
    src: "https://avatars.githubusercontent.com/u/67137854?v=4",
    alt: "Fulano da Silva",
    icon: true,
  },
};

export const NoImage: Story = {
  args: {
    size: "md",
    src: "",
    alt: "Fulano da Silva",
    icon: false,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    src: "https://avatars.githubusercontent.com/u/67137854?v=4",
    alt: "Fulano da Silva",
    icon: false,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    src: "https://avatars.githubusercontent.com/u/67137854?v=4",
    alt: "Fulano da Silva",
    icon: false,
  },
};
