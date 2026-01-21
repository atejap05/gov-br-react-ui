# Desenvolvimento de Componentes

Este guia explica como desenvolver novos componentes para a biblioteca Gov-BR React UI, seguindo os padrões e convenções do projeto.

## 📋 Anatomia de um Componente

Cada componente segue uma estrutura padronizada:

```
ComponentName/
├── ComponentName.tsx      # Implementação do componente
└── index.ts               # Exportação
```

### Arquivos Relacionados

Além da pasta do componente, você também precisará criar:

- **Story**: `src/stories/components/ComponentName.stories.tsx`
- **Estilos**: `src/styles/_componentname.scss`
- **Exportação**: Adicionar em `src/components/index.ts`

## 🏗️ Estrutura de um Componente

### Template Básico

```typescript
import "../../style.css";
import React from "react";
import { cva } from "class-variance-authority";

// Definição de variantes usando CVA
const componentVariants = cva("br-component", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// Tipos TypeScript
export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  // Outras props específicas
};

// Componente com forwardRef
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      variant,
      size,
      className,
      children,
      ...props
    }: ComponentProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={componentVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Component.displayName = "Component";
```

### Exemplo Real: Button

Veja o componente Button completo em [`src/components/Button/Button.tsx`](../src/components/Button/Button.tsx):

```typescript
import "../../style.css";
import React from "react";
import { cva } from "class-variance-authority";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

const buttonVariants = cva("br-button", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      tertiary: "",
      danger: "danger",
      success: "success",
      warning: "warning",
      info: "info",
    },
    size: {
      xs: "xsmall",
      sm: "small",
      md: "medium",
      lg: "large",
    },
    // ... mais variantes
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg";
  // ... mais props
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

## 📝 Passo a Passo: Criando um Novo Componente

### 1. Criar a Estrutura de Pastas

```bash
mkdir src/components/NovoComponente
touch src/components/NovoComponente/NovoComponente.tsx
touch src/components/NovoComponente/index.ts
```

### 2. Implementar o Componente

Crie `NovoComponente.tsx` seguindo o template acima.

**Pontos importantes**:
- ✅ Sempre usar `React.forwardRef` para permitir refs
- ✅ Props devem estender `React.HTMLAttributes<HTMLElement>`
- ✅ Usar CVA para variantes de estilo
- ✅ Importar `"../../style.css"` no topo
- ✅ Definir `displayName` para melhor debugging

### 3. Criar Exportação

`index.ts`:
```typescript
export * from "./NovoComponente";
```

### 4. Adicionar ao Index Principal

Edite `src/components/index.ts`:
```typescript
export * from "./NovoComponente";
```

### 5. Criar Estilos SCSS

Crie `src/styles/_novocomponente.scss`:

```scss
.br-novocomponente {
  // Estilos base seguindo padrão Gov.br DS
  
  &.primary {
    // Variante primary
  }
  
  &.small {
    // Tamanho small
  }
  
  &:disabled {
    // Estado disabled
  }
}
```

### 6. Importar Estilos

Edite `src/styles/_index.scss`:
```scss
@import "./novocomponente";
```

### 7. Criar Story do Storybook

Crie `src/stories/components/NovoComponente.stories.tsx`:

```typescript
import { Meta, StoryObj } from "@storybook/react";
import { NovoComponente } from "../../components/NovoComponente";

const meta: Meta<typeof NovoComponente> = {
  title: "Components/NovoComponente",
  component: NovoComponente,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Novo Componente",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};
```

## 🎨 Padrões de Código

### TypeScript

#### Props com Tipos Explícitos

```typescript
// ✅ Bom
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

// ❌ Evitar
export type ButtonProps = {
  variant?: any;
  size?: string;
};
```

#### Uso de Generics

```typescript
// Para componentes genéricos
export type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};
```

### React Patterns

#### forwardRef

Sempre use `forwardRef` para permitir acesso a refs:

```typescript
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);
```

#### Default Props via CVA

Use `defaultVariants` do CVA ao invés de valores padrão nas props:

```typescript
// ✅ Bom
const variants = cva("br-component", {
  variants: { /* ... */ },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// ❌ Evitar
const Component = ({ variant = "primary", size = "md" }) => { /* ... */ };
```

#### Destructuring e Spread

```typescript
// ✅ Bom
const Component = ({ variant, size, className, children, ...props }) => {
  return (
    <div className={variants({ variant, size, className })} {...props}>
      {children}
    </div>
  );
};
```

### Class Variance Authority (CVA)

#### Estrutura de Variantes

```typescript
const variants = cva("br-component", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});
```

#### Uso no Componente

```typescript
className={variants({
  variant,
  size,
  disabled,
  className, // Permite classes customizadas
})}
```

## 🧩 Componentes Compostos

Alguns componentes são compostos por múltiplas partes (ex: Card, Modal).

### Exemplo: Card

```
Card/
├── Card.tsx           # Componente principal
├── CardHeader.tsx     # Sub-componente
├── CardContent.tsx    # Sub-componente
├── CardFooter.tsx     # Sub-componente
├── context/
│   └── card-context.ts  # Context para comunicação
└── index.ts
```

### Usando Context API

```typescript
// context/card-context.ts
import { createContext, useContext } from "react";

const CardContext = createContext<boolean>(false);

export const CardProvider = CardContext.Provider;
export const useCard = () => useContext(CardContext);

// Card.tsx
import { CardProvider } from "./context/card-context";

export const Card = ({ children, ...props }) => {
  return (
    <CardProvider value={true}>
      <div className="br-card" {...props}>
        {children}
      </div>
    </CardProvider>
  );
};

// CardHeader.tsx
import { useCard } from "./context/card-context";

export const CardHeader = ({ children }) => {
  const isCard = useCard();
  if (!isCard) {
    throw new Error("CardHeader must be used inside Card");
  }
  return <div className="br-card-header">{children}</div>;
};
```

## 🪝 Custom Hooks

Hooks customizados devem ser criados em `src/hooks/`.

### Exemplo

```typescript
// hooks/useComponentState.ts
import { useState, useCallback } from "react";

export const useComponentState = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);
  
  return { state, toggle };
};
```

## 🎯 Convenções de Nomenclatura

### Componentes
- **Nome do componente**: PascalCase (`Button`, `DataTable`)
- **Nome do arquivo**: PascalCase (`Button.tsx`)

### Variáveis e Funções
- **camelCase**: `buttonVariants`, `handleClick`
- **Constantes**: UPPER_SNAKE_CASE: `MAX_SIZE`, `DEFAULT_VARIANT`

### Classes CSS
- **Seguir padrão Gov.br**: `br-component`
- **Modificadores**: `br-component.primary`, `br-component.small`
- **Estados**: `br-component.disabled`, `br-component.active`

### Arquivos
- **Componentes**: `ComponentName.tsx`
- **Estilos**: `_componentname.scss` (com underscore)
- **Stories**: `ComponentName.stories.tsx`
- **Types**: `@types.ts` ou `types.ts`

## ✅ Checklist de Desenvolvimento

Antes de considerar um componente completo:

- [ ] Componente implementado com TypeScript
- [ ] Props tipadas corretamente
- [ ] `forwardRef` implementado
- [ ] Variantes usando CVA
- [ ] Estilos SCSS criados e importados
- [ ] Story do Storybook criada
- [ ] Exportação adicionada ao `index.ts`
- [ ] Testado no Storybook
- [ ] Segue padrões de acessibilidade
- [ ] Documentação no Storybook completa
- [ ] Build funciona (`npm run build`)
- [ ] Linter passa (`npm run lint`)

## 📚 Exemplos de Referência

Consulte estes componentes como referência:

- **Simples**: [`Button`](../src/components/Button/Button.tsx)
- **Com Variantes**: [`Input`](../src/components/Input/Input.tsx)
- **Composto**: [`Card`](../src/components/Card/)
- **Complexo**: [`DataTable`](../src/components/DataTable/)

## 🔍 Próximos Passos

Após criar o componente:

1. **[05. Estilização](./05-ESTILOS.md)** - Aprenda sobre o sistema de estilos
2. **[06. Storybook](./06-STORYBOOK.md)** - Documente seu componente
3. **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Revise padrões e convenções

---

**Dúvidas?** Consulte o [FAQ](./12-FAQ.md) ou veja exemplos nos componentes existentes.
