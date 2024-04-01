import { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../../components/Divider";

const meta: Meta = {
  title: "Exemplos/Divider",
  component: Divider,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    orientation: {
      control: false,
    },
    size: {
      control: false,
    },
    dashed: {
      control: false,
    },
  },

  // decorators: [
  //   Story => (
  //     <>
  //       <div
  //         style={{
  //           display: "grid",
  //           gridTemplateColumns: "1fr 1fr 1fr",
  //           placeItems: "center",
  //         }}
  //       >
  //         {Story()}
  //       </div>
  //     </>
  //   ),
  // ],
};

export default meta;

type Template = StoryObj<typeof meta>;

export const Horizontal: Template = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>Conteúdo 1</h1>

      <Divider />

      <h3>Conteúdo 2</h3>
    </div>
  ),
};

export const Vertical: Template = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.6rem",
      }}
    >
      <h3>Conteúdo 1</h3>
      <Divider orientation="vertical" />
      <h3>Conteúdo 2</h3>
    </div>
  ),
};

export const Compounded: Template = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p style={{ marginTop: "1rem" }}>Conteúdo 1</p>
        <Divider orientation="vertical" />
        <p style={{ marginTop: "1rem" }}>Conteúdo 2</p>
      </div>
      <Divider size="lg" dashed />
      <div style={{ textAlign: "center" }}>
        <h1>Conteúdo 3</h1>
      </div>
    </div>
  ),
};
