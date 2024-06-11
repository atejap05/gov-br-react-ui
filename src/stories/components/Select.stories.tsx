import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    label: "Seleção simples",
    id: "select-single",
    placeholder: "Selecione uma opção",
    options: [
      { label: "Option 1", id: "option1" },
      { label: "Option 2", id: "option2" },
      { label: "Option 3", id: "option3" },
      { label: "Option 4", id: "option4" },
      { label: "Option 5", id: "option5" },
    ],
  },
};

export const Multiple: Story = {
  args: {
    label: "Seleção múltipla",
    id: "select-multiple",
    placeholder: "Selecione as opções",
    allowMultiSelect: true,
    options: [
      { label: "Option 1", id: "option1" },
      { label: "Option 2", id: "option2" },
      { label: "Option 3", id: "option3" },
      { label: "Option 4", id: "option4" },
      { label: "Option 5", id: "option5" },
    ],
  },
};
