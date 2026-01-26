import type { Meta, StoryObj } from "@storybook/react-vite";
import { Persona } from "@/components/Persona";

const meta = {
  title: "Components/Persona",
  component: Persona,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Persona>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PersonaBasica: Story = {
  args: {
    src: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "João Silva",
  },
};

export const PersonaComDescricao: Story = {
  args: {
    src: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Maria Santos",
    description: "Gerente de Projetos",
  },
};

export const PersonaDescricaoLonga: Story = {
  args: {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Carlos Oliveira",
    description: "Desenvolvedor Full Stack - Equipe de Inovação",
  },
};

export const PersonaSemFoto: Story = {
  args: {
    src: "",
    name: "Usuário Anônimo",
    description: "Sem foto de perfil",
  },
};

export const PersonaExemploCompleto: Story = {
  args: {
    src: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "João Silva",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Persona
        src="https://randomuser.me/api/portraits/men/75.jpg"
        name="João Silva"
        description="Desenvolvedor Senior"
      />
      <Persona
        src="https://randomuser.me/api/portraits/women/68.jpg"
        name="Maria Santos"
        description="Product Manager"
      />
      <Persona
        src="https://randomuser.me/api/portraits/men/32.jpg"
        name="Carlos Oliveira"
        description="UX Designer"
      />
    </div>
  ),
};
