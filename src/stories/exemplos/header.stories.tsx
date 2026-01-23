import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "@/components/Header";

const meta = {
  title: "Exemplos/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderPadrao: Story = {
  args: {
    size: "sm",
    sticky: true,
    compact: false,
    title: "Parcelamento e Transação Tributária",
    subtitle: "Aplicação para acompanhamento e gerenciamento do parcelamento e transação tributária",
    menu: {
      onClick: () => console.log("Menu Clicked"),
    },
    headerLogo: {
      logoSrc:
        "https://rfbgov.sharepoint.com/sites/Labin01/_api/siteiconmanager/getsitelogo?type=%271%27&hash=638163163922462743",
      assinatura: "Laboratório de Inovação Tributária",
      href: "https://rfbgov.sharepoint.com/sites/Labin01",
    },
    headerLinks: {
      title: "Acesso Rápido",
      options: [
        { label: "Home", url: "/" },
        { label: "Sobre", url: "/about" },
        { label: "Contato", url: "/contact" },
      ],
    },
    persona: {
      src: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Fulano de Tal da Silva",
      description: "Auditor-Fiscal da RFB",
    },
  },
};
