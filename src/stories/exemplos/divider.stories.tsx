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
  //       <div>
  //         <div
  //           style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
  //         >
  //           <h2>Exemplo de uso do Divider</h2>
  //           {Story()}
  //           <p>
  //             O componente Divider é utilizado para separar conteúdos de uma
  //             forma visualmente agradável.
  //           </p>
  //         </div>
  //       </div>
  //     </>
  //   ),
  // ],
};

export default meta;

type Template = StoryObj<typeof meta>;

export const Horizontal: Template = {
  args: {
    orientation: "horizontal",
  },
  render: ({ args }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <h1>Conteúdo 1</h1>
      </div>
      <Divider {...args} />
      <div>
        <h1>Conteúdo 2</h1>
      </div>
    </div>
  ),
};

export const Vertical: Template = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>
        <h1>Conteúdo 1</h1>
      </div>
      <Divider orientation="vertical" />
      <div>
        <h1>Conteúdo 2</h1>
      </div>
    </div>
  ),
};

export const Compounded: Template = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <h1>Conteúdo 1</h1>
      </div>
      <Divider />
      <div>
        <h1>Conteúdo 2</h1>
      </div>
      <Divider />
      <div>
        <h1>Conteúdo 3</h1>
      </div>
    </div>
  ),
};
