import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loading } from "@/components/Loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingBasico: Story = {
  args: {},
};

export const LoadingMedio: Story = {
  args: {
    medium: true,
  },
};

export const LoadingComProgresso: Story = {
  args: {
    progress: 50,
  },
};

export const LoadingProgresso25: Story = {
  args: {
    progress: 25,
  },
};

export const LoadingProgresso50: Story = {
  args: {
    progress: 50,
  },
};

export const LoadingProgresso75: Story = {
  args: {
    progress: 75,
  },
};

export const LoadingProgresso100: Story = {
  args: {
    progress: 100,
  },
};

export const LoadingMedioComProgresso: Story = {
  args: {
    medium: true,
    progress: 60,
  },
};

export const LoadingExemploCompleto: Story = {
  args: {},
  render: () => {
    return (
      <div style={{ width: "300px" }}>
        <h3 style={{ marginBottom: "1rem" }}>Carregando dados...</h3>
        <Loading progress={65} />
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          65% concluído
        </p>
      </div>
    );
  },
};
