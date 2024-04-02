import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: [
          "primary",
          "secondary",
          "terciary",
          "danger",
          "success",
          "warning",
          "info",
        ],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    circle: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    active: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Terciary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Button",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info Button",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Extra Small Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Circle: Story = {
  args: {
    circle: true,
    children: "🔍",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Active: Story = {
  args: {
    active: true,
    children: "Active Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
    children: "Dark Mode Button",
  },
};

export const Block: Story = {
  args: {
    block: true,
    children: "Block Button",
  },
};
