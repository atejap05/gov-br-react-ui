import { Meta, StoryObj } from "@storybook/react";
import { ListExpandable } from "../../../components/List";
import { faHome, faTable, faUser } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof ListExpandable> = {
  title: "Components/ListExpandable",
  component: ListExpandable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Minha conta",
    options: [
      {
        id: "1",
        icon: faUser,
        primaryText: "Minha conta",
        secondaryText: "Meta",
      },
      {
        id: "2",
        icon: faHome,
        primaryText: "Início",
        secondaryText: "Meta",
      },
      {
        id: "3",
        icon: faTable,
        primaryText: "Dados",
        secondaryText: "Meta",
      },
    ],
  },
};
