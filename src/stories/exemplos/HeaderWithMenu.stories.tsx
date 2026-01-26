import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

const meta = {
  title: "Exemplos/Header com Menu",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderComMenuBasico: Story = {
  args: {
    title: "Minha Aplicação",
  },
  render: () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <Header
          size="md"
          sticky={true}
          compact={false}
          title="Minha Aplicação"
          subtitle="Sistema de gestão integrado"
          menu={{
            onClick: () => setMenuOpen(!menuOpen),
          }}
          headerLogo={{
            logoSrc: "https://via.placeholder.com/40x40",
            assinatura: "Governo Federal",
            href: "#",
          }}
          persona={{
            src: "https://randomuser.me/api/portraits/men/75.jpg",
            name: "João Silva",
            description: "Administrador",
          }}
        />
        <Menu
          show={menuOpen}
          mode="offcanvas"
          header={{
            title: "Minha Aplicação",
            image: {
              src: "https://via.placeholder.com/40x40",
              className: "logo",
            },
            handleClose: () => setMenuOpen(false),
          }}
          items={[
            {
              id: "home",
              icon: "home",
              content: "Início",
            },
            {
              id: "dashboard",
              icon: "tachometer-alt",
              content: "Dashboard",
            },
            {
              id: "users",
              icon: "users",
              content: "Usuários",
            },
            {
              id: "settings",
              icon: "cog",
              content: "Configurações",
            },
          ]}
          onClick={(id) => {
            console.log("Item do menu clicado:", id);
            // Aqui você pode adicionar lógica de navegação
          }}
        />
        <div style={{ padding: "2rem" }}>
          <h1>Conteúdo da Página</h1>
          <p>
            Este é um exemplo de integração entre o componente Header e Menu.
            Clique no botão de menu no header para abrir/fechar o menu lateral.
          </p>
        </div>
      </>
    );
  },
};

export const HeaderComMenuCompleto: Story = {
  args: {
    title: "Sistema de Gestão",
  },
  render: () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <Header
          size="lg"
          sticky={true}
          compact={false}
          title="Sistema de Gestão"
          subtitle="Aplicação para gerenciamento completo"
          menu={{
            onClick: () => setMenuOpen(!menuOpen),
          }}
          headerLogo={{
            logoSrc: "https://via.placeholder.com/40x40",
            assinatura: "Governo Federal",
            href: "#",
          }}
          headerLinks={{
            title: "Acesso Rápido",
            options: [
              { label: "Home", url: "/" },
              { label: "Documentação", url: "/docs" },
              { label: "Suporte", url: "/support" },
            ],
          }}
          persona={{
            src: "https://randomuser.me/api/portraits/women/68.jpg",
            name: "Maria Santos",
            description: "Gerente de Projetos",
          }}
        />
        <Menu
          show={menuOpen}
          mode="offcanvas"
          header={{
            title: "Sistema de Gestão",
            image: {
              src: "https://via.placeholder.com/40x40",
              className: "logo",
            },
            handleClose: () => setMenuOpen(false),
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
                {
                  id: "users-roles",
                  icon: "user-shield",
                  content: "Permissões",
                },
              ],
            },
            {
              id: "projects",
              icon: "folder",
              content: "Projetos",
            },
            {
              id: "reports",
              icon: "file-alt",
              content: "Relatórios",
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
                url: "#help",
                icon: "question-circle",
              },
              {
                label: "Suporte",
                url: "#support",
                icon: "headset",
              },
            ],
            info: {
              content: "Versão 1.0.0 - © 2026",
              className: "text-sm",
            },
          }}
          onClick={(id) => {
            console.log("Item do menu clicado:", id);
            // Aqui você pode adicionar lógica de navegação
            // Exemplo: router.push(`/${id}`);
          }}
        />
        <div style={{ padding: "2rem" }}>
          <h1>Conteúdo da Página</h1>
          <p>
            Este exemplo demonstra uma integração completa entre Header e Menu,
            incluindo:
          </p>
          <ul>
            <li>Header com logo, título, links rápidos e persona</li>
            <li>Menu lateral com subitens (layers)</li>
            <li>Menu com header e footer</li>
            <li>Controle de estado para abrir/fechar o menu</li>
          </ul>
        </div>
      </>
    );
  },
};

export const HeaderComMenuModoPush: Story = {
  args: {
    title: "Aplicação com Menu Push",
  },
  render: () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
      <>
        <Header
          size="md"
          sticky={false}
          compact={false}
          title="Aplicação com Menu Push"
          subtitle="Menu que empurra o conteúdo"
          menu={{
            onClick: () => setMenuOpen(!menuOpen),
          }}
          headerLogo={{
            logoSrc: "https://via.placeholder.com/40x40",
            assinatura: "Governo Federal",
            href: "#",
          }}
        />
        <Menu
          show={menuOpen}
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
        <div style={{ padding: "2rem", marginLeft: menuOpen ? "25%" : "0" }}>
          <h1>Conteúdo da Página</h1>
          <p>
            No modo "push", o menu empurra o conteúdo da página quando aberto.
            Observe como o conteúdo se ajusta quando você abre/fecha o menu.
          </p>
        </div>
      </>
    );
  },
};
