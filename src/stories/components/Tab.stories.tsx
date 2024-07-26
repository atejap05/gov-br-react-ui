import { Meta, StoryObj } from "@storybook/react";
import { Tab } from "../../components/Tab";

const meta: Meta<typeof Tab> = {
  title: "components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: "Sobre",
      },
      {
        id: 1,
        label: "Todos",
      },
      {
        id: 2,
        label: "Notícias",
      },
      {
        id: 3,
        label: "Serviços",
      },
      {
        id: 4,
        label: "Aplicativos",
      },
      {
        id: 5,
        label: "Mídia",
      },
    ],
  },
};

export const Description: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: "Sobre",
        description: "Descrição da aba Sobre",
      },
      {
        id: 1,
        label: "Todos",
        description: "Descrição da aba Todos",
      },
      {
        id: 2,
        label: "Notícias",
        description: "Descrição da aba Notícias",
      },
      {
        id: 3,
        label: "Serviços",
        description: "Descrição da aba Serviços",
      },
      {
        id: 4,
        label: "Aplicativos",
        description: "Descrição da aba Aplicativos",
      },
      {
        id: 5,
        label: "Mídia",
        description: "Descrição da aba Mídia",
      },
    ],
  },
};

export const Counter: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: "Sobre",
        counter: 11,
      },
      {
        id: 1,
        label: "Todos",
        counter: 13,
      },
      {
        id: 2,
        label: "Notícias",
        counter: 55,
      },
      {
        id: 3,
        label: "Serviços",
        counter: 0,
      },
      {
        id: 4,
        label: "Aplicativos",
        counter: 5,
      },
      {
        id: 5,
        label: "Mídia",
        counter: 33,
      },
    ],
  },
};

export const Icon: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: "Sobre",
        icon: "fa-info",
      },
      {
        id: 1,
        label: "Todos",
        icon: "fa-list",
      },
      {
        id: 2,
        label: "Notícias",
        icon: "fa-newspaper",
      },
      {
        id: 3,
        label: "Serviços",
        icon: "fa-tools",
      },
      {
        id: 4,
        label: "Aplicativos",
        icon: "fa-mobile",
      },
      {
        id: 5,
        label: "Mídia",
        icon: "fa-camera",
      },
    ],
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    tabs: [
      {
        id: 0,
        label: "Sobre",
        description: "Tab Content Sobre",
        counter: 10,
        icon: "fa-address-card",
      },
      {
        id: 1,
        label: "Todos",
        description: "Tab Content Todos",
        counter: 20,
        icon: "fa-list",
      },
      {
        id: 2,
        label: "Notícias",
        description: "Tab Content Notícias",
        counter: 100,
        icon: "fa-newspaper",
      },
      {
        id: 3,
        label: "Serviços",
        description: "Tab Content Serviços",
        counter: 5,
        icon: "fa-cogs",
      },
      {
        id: 4,
        label: "Aplicativos",
        description: "Tab Content Aplicativos",
        counter: 53,
        icon: "fa-mobile",
      },
      {
        id: 5,
        label: "Mídia",
        description: "Tab Content Mídia",
        counter: 0,
        icon: "fa-camera",
      },
    ],
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    tabs: [
      {
        id: 0,
        label: "Sobre",
        description: "Tab Content Sobre",
        counter: 10,
        icon: "fa-address-card",
      },
      {
        id: 1,
        label: "Todos",
        description: "Tab Content Todos",
        counter: 20,
        icon: "fa-list",
      },
      {
        id: 2,
        label: "Notícias",
        description: "Tab Content Notícias",
        counter: 100,
        icon: "fa-newspaper",
      },
      {
        id: 3,
        label: "Serviços",
        description: "Tab Content Serviços",
        counter: 5,
        icon: "fa-cogs",
      },
      {
        id: 4,
        label: "Aplicativos",
        description: "Tab Content Aplicativos",
        counter: 53,
        icon: "fa-mobile",
      },
      {
        id: 5,
        label: "Mídia",
        description: "Tab Content Mídia",
        counter: 0,
        icon: "fa-camera",
      },
    ],
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    tabs: [
      {
        id: 0,
        label: "Sobre",
        description: "Tab Content Sobre",
        counter: 10,
        icon: "fa-address-card",
      },
      {
        id: 1,
        label: "Todos",
        description: "Tab Content Todos",
        counter: 20,
        icon: "fa-list",
      },
      {
        id: 2,
        label: "Notícias",
        description: "Tab Content Notícias",
        counter: 100,
        icon: "fa-newspaper",
      },
      {
        id: 3,
        label: "Serviços",
        description: "Tab Content Serviços",
        counter: 5,
        icon: "fa-cogs",
      },
      {
        id: 4,
        label: "Aplicativos",
        description: "Tab Content Aplicativos",
        counter: 53,
        icon: "fa-mobile",
      },
      {
        id: 5,
        label: "Mídia",
        description: "Tab Content Mídia",
        counter: 0,
        icon: "fa-camera",
      },
    ],
  },
};
