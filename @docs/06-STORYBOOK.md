# Guia do Storybook

O Storybook é a ferramenta de documentação e testes visuais dos componentes da biblioteca. Este guia explica como usar, criar e manter stories.

## 📚 O que é Storybook?

Storybook é um ambiente de desenvolvimento isolado para componentes React. Ele permite:

- 📖 Documentar componentes visualmente
- 🧪 Testar componentes isoladamente
- 🎨 Visualizar diferentes estados e variantes
- 🔄 Desenvolvimento com hot reload
- 📝 Gerar documentação automática

## 🚀 Iniciando o Storybook

### Comando

```bash
npm run storybook
```

O Storybook será iniciado em `http://localhost:6006` e abrirá automaticamente no navegador.

### Build Estático

Para gerar uma versão estática (para deploy):

```bash
npm run build-storybook
```

Isso cria a pasta `storybook-static/` com todos os arquivos necessários.

## 📁 Estrutura de Stories

### Localização

As stories estão organizadas em:

```
src/stories/
├── components/           # Stories por componente
│   ├── Button.stories.tsx
│   ├── Input.stories.tsx
│   └── ...
└── exemplos/             # Exemplos de uso combinado
    ├── button.stories.tsx
    ├── card.stories.tsx
    └── ...
```

### Convenção de Nomenclatura

- **Arquivo**: `ComponentName.stories.tsx`
- **Título**: `"Components/ComponentName"` ou `"Exemplos/NomeDoExemplo"`

## 🏗️ Anatomia de uma Story

### Estrutura Básica

```typescript
import { Meta, StoryObj } from "@storybook/react";
import { Component } from "../../components/Component";

// Meta: Configuração do componente
const meta: Meta<typeof Component> = {
  title: "Components/Component",
  component: Component,
  tags: ["autodocs"], // Gera documentação automática
  parameters: {
    layout: "centered", // ou "padded", "fullscreen"
  },
  argTypes: {
    // Configuração dos controles
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

// Tipo para stories
type Story = StoryObj<typeof meta>;

// Stories individuais
export const Default: Story = {
  args: {
    children: "Component",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};
```

### Exemplo Real: Button

Veja [`src/stories/components/Button.stories.tsx`](../src/stories/components/Button.stories.tsx):

```typescript
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary", "danger", "success", "warning", "info"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    // ... mais argTypes
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

// ... mais stories
```

## 🎨 Tipos de Stories

### Story Básica

```typescript
export const Default: Story = {
  args: {
    children: "Texto",
  },
};
```

### Story com Render Customizado

```typescript
export const CustomRender: Story = {
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <Component {...args} />
    </div>
  ),
};
```

### Story com Decorators

```typescript
export const WithDecorator: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: "#f0f0f0", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: "Decorated",
  },
};
```

### Story com Interações

```typescript
import { userEvent, within } from "@storybook/test";

export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  },
  args: {
    children: "Click me",
  },
};
```

## 📝 Configuração (Meta)

### Propriedades Principais

```typescript
const meta: Meta<typeof Component> = {
  // Título e organização
  title: "Components/Component", // ou "Exemplos/Exemplo"
  
  // Componente principal
  component: Component,
  
  // Tags
  tags: ["autodocs"], // Gera docs automáticos
  
  // Layout
  parameters: {
    layout: "centered", // "padded" | "fullscreen"
  },
  
  // Controles (argTypes)
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Variante visual do componente",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
  },
};
```

### Tipos de Controles

```typescript
argTypes: {
  // Radio buttons
  variant: {
    control: { type: "radio" },
    options: ["primary", "secondary"],
  },
  
  // Select dropdown
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
  },
  
  // Checkbox (boolean)
  disabled: {
    control: { type: "boolean" },
  },
  
  // Text input
  label: {
    control: { type: "text" },
  },
  
  // Number input
  maxLength: {
    control: { type: "number" },
  },
  
  // Color picker
  color: {
    control: { type: "color" },
  },
  
  // Range slider
  opacity: {
    control: { type: "range", min: 0, max: 1, step: 0.1 },
  },
  
  // Date picker
  date: {
    control: { type: "date" },
  },
};
```

## 🎯 Autodocs

A tag `autodocs` gera documentação automaticamente:

```typescript
tags: ["autodocs"]
```

Isso cria:
- ✅ Tabela de props
- ✅ Descrições dos argTypes
- ✅ Valores padrão
- ✅ Exemplos de código

### Customizar Autodocs

```typescript
parameters: {
  docs: {
    description: {
      component: "Descrição completa do componente",
    },
  },
},
```

## 🔧 Configuração do Storybook

### Arquivo Principal: `.storybook/main.ts`

```typescript
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
```

### Preview: `.storybook/preview.ts`

Configure o preview global:

```typescript
import type { Preview } from "@storybook/react";
import "../src/style.css"; // Importa estilos globais

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
```

## 🧪 Testes com Storybook

### Testes de Interação

```typescript
import { expect, userEvent, within } from "@storybook/test";

export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /click me/i });
    
    await userEvent.click(button);
    
    await expect(button).toHaveTextContent("Clicked!");
  },
};
```

### Testes Visuais com Chromatic

O projeto está configurado com Chromatic para testes visuais:

```bash
npm run chromatic
```

Isso captura screenshots e detecta mudanças visuais automaticamente.

## 📖 Documentação Adicional

### Markdown nos Stories

Você pode adicionar documentação em Markdown:

```typescript
import { Meta } from "@storybook/react";

const meta: Meta<typeof Component> = {
  title: "Components/Component",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `
          # Componente Exemplo
          
          Este componente faz...
          
          ## Uso
          
          \`\`\`tsx
          <Component variant="primary">Texto</Component>
          \`\`\`
        `,
      },
    },
  },
};
```

## 🎨 Exemplos e Casos de Uso

### Stories de Exemplos

As stories em `src/stories/exemplos/` mostram uso combinado:

```typescript
// exemplos/form.stories.tsx
export const FormExample: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <h3>Formulário</h3>
      </CardHeader>
      <CardContent>
        <Input label="Nome" />
        <Input label="Email" type="email" />
        <Button variant="primary">Enviar</Button>
      </CardContent>
    </Card>
  ),
};
```

## ✅ Checklist para Stories

Ao criar uma story:

- [ ] Arquivo criado em `src/stories/components/`
- [ ] Meta configurado com título correto
- [ ] Componente importado corretamente
- [ ] Tags `["autodocs"]` adicionadas
- [ ] ArgTypes configurados para todas as props importantes
- [ ] Stories cobrem variantes principais
- [ ] Stories cobrem estados (disabled, loading, etc.)
- [ ] Layout apropriado configurado
- [ ] Documentação descritiva (se necessário)
- [ ] Testado visualmente no Storybook

## 🔍 Navegação no Storybook

### Sidebar

- **Components**: Componentes individuais
- **Exemplos**: Casos de uso combinados

### Painel de Controles

- **Controls**: Modifica props em tempo real
- **Actions**: Log de eventos
- **Docs**: Documentação gerada

## 🚀 Deploy

### Chromatic (Visual Testing)

```bash
npm run chromatic
```

### Build Estático

```bash
npm run build-storybook
```

Depois, você pode servir `storybook-static/` com qualquer servidor estático.

## 📚 Recursos

- **[Documentação Storybook](https://storybook.js.org/docs)**
- **[Storybook para React](https://storybook.js.org/docs/react/get-started/introduction)**
- **[Chromatic](https://www.chromatic.com/)**

## 🔄 Próximos Passos

- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Crie componentes
- **[07. Build e Publicação](./07-BUILD-PUBLICACAO.md)** - Publique a biblioteca
- **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Revise padrões

---

**Dúvidas sobre Storybook?** Consulte o [FAQ](./12-FAQ.md) ou veja exemplos nas stories existentes.
