import { Meta, StoryObj } from "@storybook/react";
import { Upload } from "@/components";

const meta: Meta<typeof Upload> = {
  title: "components/Upload",
  component: Upload,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],

  decorators: [
    Story => (
      <div
        style={{
          padding: "1rem",
          borderRadius: "0.3rem",
          boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const Single: Story = {
  args: {
    label: "Envio de arquivos",
    placeholder: "Arraste e solte o arquivo aqui ou clique para selecioná-lo",
    helperText: "Arquivos suportados: .pdf, .docx, .doc, .odt, .txt",
    multiple: false,
  },
};

export const Multiple: Story = {
  args: {
    label: "Envio de arquivos",
    placeholder:
      "Arraste e solte os arquivos aqui ou clique para selecioná-los",
    helperText: "Arquivos suportados: .pdf, .docx, .doc, .odt, .txt",
    multiple: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Envio de arquivos",
    placeholder: "Arraste e solte o arquivo aqui ou clique para selecioná-lo",
    helperText: "Arquivos suportados: .pdf, .docx, .doc, .odt, .txt",
    multiple: false,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Envio de arquivos",
    placeholder: "Arraste e solte o arquivo aqui ou clique para selecioná-lo",
    helperText: "Arquivos suportados: .pdf, .docx, .doc, .odt, .txt",
    multiple: false,
    error: true,
  },
};
