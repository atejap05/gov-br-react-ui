import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@/components/Tag";
import { TagStatus } from "@/components/Tag/TagStatus";
import { TagCount } from "@/components/Tag/TagCount";
import { TagSelection } from "@/components/Tag/TagSelection";
import { faUser, faHome, faCog } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TagBasica: Story = {
  args: {
    label: "Tag Básica",
  },
};

export const TagComIcone: Story = {
  args: {
    label: "Tag com Ícone",
    icon: faUser,
  },
};

export const TagFechavel: Story = {
  args: {
    label: "Tag Fechável",
    closeable: true,
  },
};

export const TagPequena: Story = {
  args: {
    label: "Tag Pequena",
    size: "sm",
  },
};

export const TagGrande: Story = {
  args: {
    label: "Tag Grande",
    size: "lg",
  },
};

export const TagDesabilitada: Story = {
  args: {
    label: "Tag Desabilitada",
    disabled: true,
  },
};

// TagStatus Stories
export const TagStatusOnline: StoryObj<typeof TagStatus> = {
  args: {},
  render: () => <TagStatus status="online" label="Online" />,
};

export const TagStatusOffline: StoryObj<typeof TagStatus> = {
  args: {},
  render: () => <TagStatus status="offline" label="Offline" />,
};

export const TagStatusAway: StoryObj<typeof TagStatus> = {
  args: {},
  render: () => <TagStatus status="away" label="Ausente" />,
};

export const TagStatusSemLabel: StoryObj<typeof TagStatus> = {
  args: {},
  render: () => <TagStatus status="online" />,
};

// TagCount Stories
export const TagCountBasica: StoryObj<typeof TagCount> = {
  args: {},
  render: () => <TagCount count="5" />,
};

export const TagCountComTitulo: StoryObj<typeof TagCount> = {
  args: {},
  render: () => <TagCount count="12" title="12 notificações" />,
};

export const TagCountPequena: StoryObj<typeof TagCount> = {
  args: {},
  render: () => <TagCount count="3" size="sm" />,
};

export const TagCountGrande: StoryObj<typeof TagCount> = {
  args: {},
  render: () => <TagCount count="99+" size="lg" />,
};

// TagSelection Stories
export const TagSelectionBasica: StoryObj<typeof TagSelection> = {
  args: {},
  render: () => (
    <TagSelection
      id="tag-1"
      name="tags"
      value="tag1"
      label="Tag Selecionável"
    />
  ),
};

export const TagSelectionComIcone: StoryObj<typeof TagSelection> = {
  args: {},
  render: () => (
    <TagSelection
      id="tag-2"
      name="tags"
      value="tag2"
      label="Tag com Ícone"
      icon={faHome}
    />
  ),
};

export const TagSelectionMultipla: StoryObj<typeof TagSelection> = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <TagSelection
        id="tag-multi-1"
        name="tags-multi"
        value="tag1"
        label="Tag 1"
        multiselect={true}
      />
      <TagSelection
        id="tag-multi-2"
        name="tags-multi"
        value="tag2"
        label="Tag 2"
        multiselect={true}
      />
      <TagSelection
        id="tag-multi-3"
        name="tags-multi"
        value="tag3"
        label="Tag 3"
        multiselect={true}
      />
    </div>
  ),
};

export const TagSelectionRadio: StoryObj<typeof TagSelection> = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <TagSelection
        id="tag-radio-1"
        name="tags-radio"
        value="tag1"
        label="Opção 1"
        multiselect={false}
      />
      <TagSelection
        id="tag-radio-2"
        name="tags-radio"
        value="tag2"
        label="Opção 2"
        multiselect={false}
      />
      <TagSelection
        id="tag-radio-3"
        name="tags-radio"
        value="tag3"
        label="Opção 3"
        multiselect={false}
      />
    </div>
  ),
};

export const TagSelectionTamanhos: StoryObj<typeof TagSelection> = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <TagSelection
        id="tag-sm"
        name="tags-size"
        value="small"
        label="Pequena"
        size="sm"
      />
      <TagSelection
        id="tag-md"
        name="tags-size"
        value="medium"
        label="Média"
        size="md"
      />
      <TagSelection
        id="tag-lg"
        name="tags-size"
        value="large"
        label="Grande"
        size="lg"
      />
    </div>
  ),
};
