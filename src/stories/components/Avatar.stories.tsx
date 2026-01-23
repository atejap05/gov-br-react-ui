import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "../../components/Avatar";

const meta = {
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
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

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
