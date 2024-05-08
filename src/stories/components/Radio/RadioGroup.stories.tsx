import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../../../components/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "components/Radio/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const options = [
  {
    id: "radio1",
    label: "Radio Item 1",
    name: "radio",
    value: "radio1",
  },
  {
    id: "radio2",
    label: "Radio Item 2",
    name: "radio",
    value: "radio2",
  },
  {
    id: "radio3",
    label: "Radio Item 3",
    name: "radio",
    value: "radio3",
  },
  {
    id: "radio4",
    label: "Radio Item 4",
    name: "radio",
    value: "radio4",
  },
];

export const Default: Story = {
  args: {
    title: "Title",
    subtitle: "Additional information",
    feedback: {
      status: "info",
      text: "This is a feedback message",
    },
    options: options,
  },
};

export const Horizontal: Story = {
  args: {
    title: "Title",
    subtitle: "Additional information",
    feedback: {
      status: "success",
      text: "This is a feedback message",
    },
    options: options,
    orientation: "horizontal",
  },
};

export const EstadosEValidacoes: Story = {
  args: {
    title: "Title",
    subtitle: "Additional information",
    feedback: {
      status: "warning",
      text: "This is a feedback message",
    },
    options: [
      {
        id: "radio1",
        label: "Invalid",
        name: "radio",
        value: "radio1",
        valid: true,
      },
      {
        id: "radio2",
        label: "Valid",
        name: "radio",
        value: "radio2",
        valid: false,
      },
      {
        id: "radio3",
        label: "Disabled",
        name: "radio",
        value: "radio3",
        disabled: true,
      },
      {
        id: "radio4",
        label: "Default Checked",
        name: "radio",
        value: "radio4",
        defaultChecked: true,
      },
    ],
  },
};
