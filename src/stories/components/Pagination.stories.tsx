import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "@/components/Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaginacaoBasica: Story = {
  args: {
    numberOfPages: 10,
    ellipsis: 2,
    defaultActivePage: 1,
  },
};

export const PaginacaoComCallback: Story = {
  args: {
    numberOfPages: 15,
    ellipsis: 3,
    defaultActivePage: 1,
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <div>
        <p style={{ marginBottom: "1rem" }}>
          Página atual: {currentPage}
        </p>
        <Pagination
          numberOfPages={15}
          ellipsis={3}
          defaultActivePage={currentPage}
          onChange={(page) => {
            console.log("Página selecionada:", page);
            setCurrentPage(page);
          }}
        />
      </div>
    );
  },
};

export const PaginacaoPequena: Story = {
  args: {
    numberOfPages: 10,
    ellipsis: 2,
    size: "sm",
    defaultActivePage: 1,
  },
};

export const PaginacaoMedia: Story = {
  args: {
    numberOfPages: 10,
    ellipsis: 2,
    size: "md",
    defaultActivePage: 1,
  },
};

export const PaginacaoGrande: Story = {
  args: {
    numberOfPages: 10,
    ellipsis: 2,
    size: "lg",
    defaultActivePage: 1,
  },
};

export const PaginacaoComMuitasPaginas: Story = {
  args: {
    numberOfPages: 50,
    ellipsis: 3,
    defaultActivePage: 25,
  },
};

export const PaginacaoPoucasPaginas: Story = {
  args: {
    numberOfPages: 5,
    ellipsis: 1,
    defaultActivePage: 1,
  },
};

export const PaginacaoComEllipsis: Story = {
  args: {
    numberOfPages: 20,
    ellipsis: 5,
    defaultActivePage: 10,
  },
};
