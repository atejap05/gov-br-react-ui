import { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "../../components/Card";

const meta: Meta<typeof Card> = {
  title: "components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader>
        <p className="text-xl font-semibold">Card Header</p>
      </CardHeader>

      <CardContent>
        <p className="text-lg">Card Content</p>
        <p className="text-gray-600">This is a test</p>
      </CardContent>

      <CardFooter>
        <p className="text-sm font-semibold">Card Footer</p>
      </CardFooter>
    </Card>
  ),
};
