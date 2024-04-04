import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Exemplos/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const TiposDensidade: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <h1>Tipos e Densidades</h1>
      <div className="flex gap-4">
        <Avatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/67137854?v=4"
          alt="Fulano da Silva"
        />
        <Avatar
          size="md"
          src="https://avatars.githubusercontent.com/u/67137854?v=4"
          alt="Fulano da Silva"
        />
        <Avatar
          size="lg"
          src="https://avatars.githubusercontent.com/u/67137854?v=4"
          alt="Fulano da Silva"
        />
      </div>
      <div className="flex gap-4">
        <Avatar size="sm" src="" alt="Fulano da Silva" />
        <Avatar
          size="md"
          src=""
          alt="Fulano da Silva"
          className="bg-blue-300 text-blue-100"
        />
        <Avatar
          size="lg"
          src=""
          alt="Fulano da Silva"
          className="bg-green-300 text-green-100"
        />
      </div>
      <div className="flex gap-4">
        <Avatar
          icon
          size="sm"
          src="https://avatars.githubusercontent.com/u/67137854?v=4"
          alt="Fulano da Silva"
        />
        <Avatar
          icon
          size="md"
          src="https://avatars.githubusercontent.com/u/67137854?v=4"
          alt="Fulano da Silva"
        />
        <Avatar
          icon
          size="lg"
          src="https://avatars.githubusercontent.com/u/67137854?v=4"
          alt="Fulano da Silva"
        />
      </div>
    </div>
  ),
};
