import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Menu } from "@/components/Menu";

const meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuBasico: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="offcanvas"
        items={[
          {
            id: "home",
            icon: "home",
            content: "Início",
          },
          {
            id: "about",
            icon: "info-circle",
            content: "Sobre",
          },
          {
            id: "contact",
            icon: "envelope",
            content: "Contato",
          },
        ]}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};

export const MenuComSubitens: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="offcanvas"
        items={[
          {
            id: "dashboard",
            icon: "tachometer-alt",
            content: "Dashboard",
            layer: [
              {
                id: "dashboard-overview",
                icon: "chart-line",
                content: "Visão Geral",
              },
              {
                id: "dashboard-analytics",
                icon: "chart-bar",
                content: "Analíticas",
              },
            ],
          },
          {
            id: "users",
            icon: "users",
            content: "Usuários",
            layer: [
              {
                id: "users-list",
                icon: "list",
                content: "Lista de Usuários",
              },
              {
                id: "users-add",
                icon: "user-plus",
                content: "Adicionar Usuário",
              },
            ],
          },
          {
            id: "settings",
            icon: "cog",
            content: "Configurações",
          },
        ]}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};

export const MenuComHeader: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu, setShowMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="offcanvas"
        header={{
          title: "Minha Aplicação",
          image: {
            src: "https://via.placeholder.com/40x40",
            className: "logo",
          },
          handleClose: () => setShowMenu(false),
        }}
        items={[
          {
            id: "home",
            icon: "home",
            content: "Início",
          },
          {
            id: "about",
            icon: "info-circle",
            content: "Sobre",
          },
          {
            id: "contact",
            icon: "envelope",
            content: "Contato",
          },
        ]}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};

export const MenuCompleto: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu, setShowMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="offcanvas"
        header={{
          title: "Sistema de Gestão",
          image: {
            src: "https://via.placeholder.com/40x40",
            className: "logo",
          },
          handleClose: () => setShowMenu(false),
        }}
        items={[
          {
            id: "dashboard",
            icon: "tachometer-alt",
            content: "Dashboard",
            layer: [
              {
                id: "dashboard-overview",
                icon: "chart-line",
                content: "Visão Geral",
              },
              {
                id: "dashboard-reports",
                icon: "file-alt",
                content: "Relatórios",
              },
            ],
          },
          {
            id: "users",
            icon: "users",
            content: "Usuários",
            layer: [
              {
                id: "users-list",
                icon: "list",
                content: "Lista",
              },
              {
                id: "users-add",
                icon: "user-plus",
                content: "Adicionar",
              },
            ],
          },
          {
            id: "settings",
            icon: "cog",
            content: "Configurações",
          },
        ]}
        footer={{
          logos: [
            {
              src: "https://via.placeholder.com/60x30",
              className: "footer-logo",
            },
          ],
          links: [
            {
              label: "Ajuda",
              url: "#",
              icon: "question-circle",
            },
            {
              label: "Suporte",
              url: "#",
              icon: "headset",
            },
          ],
          info: {
            content: "Versão 1.0.0",
            className: "text-sm",
          },
        }}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};

export const MenuModoPush: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="push"
        items={[
          {
            id: "home",
            icon: "home",
            content: "Início",
          },
          {
            id: "about",
            icon: "info-circle",
            content: "Sobre",
          },
          {
            id: "contact",
            icon: "envelope",
            content: "Contato",
          },
        ]}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};

export const MenuDensidadeCompacta: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="offcanvas"
        density="compact"
        items={[
          {
            id: "home",
            icon: "home",
            content: "Início",
          },
          {
            id: "about",
            icon: "info-circle",
            content: "Sobre",
          },
          {
            id: "contact",
            icon: "envelope",
            content: "Contato",
          },
        ]}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};

export const MenuDensidadeGrande: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => {
    const [showMenu] = useState(true);

    return (
      <Menu
        show={showMenu}
        mode="offcanvas"
        density="large"
        items={[
          {
            id: "home",
            icon: "home",
            content: "Início",
          },
          {
            id: "about",
            icon: "info-circle",
            content: "Sobre",
          },
          {
            id: "contact",
            icon: "envelope",
            content: "Contato",
          },
        ]}
        onClick={(id) => console.log("Item clicado:", id)}
      />
    );
  },
};
