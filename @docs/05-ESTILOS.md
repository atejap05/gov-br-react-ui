# Guia de Estilização

Este documento explica o sistema de estilos do projeto, como os arquivos SCSS são organizados e como integrar com o Design System do Governo Federal.

## 📁 Arquitetura SCSS

### Estrutura de Arquivos

```
src/
├── style.scss              # Ponto de entrada principal
└── styles/
    ├── _index.scss         # Índice que importa todos os componentes
    ├── _alert.scss
    ├── _avatar.scss
    ├── _button.scss
    ├── _card.scss
    └── ...                 # Um arquivo por componente
```

### Fluxo de Importação

```mermaid
flowchart LR
    styleScss[style.scss] --> indexScss[_index.scss]
    indexScss --> alert[_alert.scss]
    indexScss --> button[_button.scss]
    indexScss --> card[_card.scss]
    indexScss --> outros[...outros componentes]
    
    styleScss --> govbrCore[@govbr-ds/core]
    styleScss --> fonts[Fontes CDN]
```

### Ponto de Entrada: `style.scss`

O arquivo [`src/style.scss`](../src/style.scss) é o ponto de entrada:

```scss
@import "./styles/index";
```

### Índice de Estilos: `_index.scss`

O arquivo [`src/styles/_index.scss`](../src/styles/_index.scss) importa:

1. **Fontes e dependências externas**
2. **Core do Design System**
3. **Estilos de cada componente**

```scss
/* Typography */
@import url("https://fonts.cdnfonts.com/css/rawline");
@import url("https://fonts.cdnfonts.com/css/raleway-5");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css");

/* CSS Core --> Setup bases*/
@import "../../node_modules/@govbr-ds/core/src/partial/scss/core-base.scss";

/* Components*/
@import "./alert";
@import "./avatar";
@import "./button";
@import "./card";
// ... todos os componentes
```

## 🎨 Integração com Gov.br Design System

### Dependência

```json
"@govbr-ds/core": "^3.5.1"
```

### Importação do Core

```scss
@import "../../node_modules/@govbr-ds/core/src/partial/scss/core-base.scss";
```

Isso fornece:
- ✅ Variáveis CSS customizadas (cores, espaçamentos, tipografia)
- ✅ Classes utilitárias base
- ✅ Mixins SCSS
- ✅ Reset CSS e normalização

### Variáveis Disponíveis

O Design System fornece variáveis CSS que você pode usar:

```scss
// Cores
.br-component {
  background-color: var(--blue-50);
  color: var(--blue-warm-90);
  border-color: var(--gray-30);
}

// Espaçamentos
.br-component {
  padding: var(--spacing-scale-base);
  margin: var(--spacing-scale-2x);
}
```

## 📝 Convenções de Nomenclatura

### Classes CSS

Seguem o padrão do Design System Gov.br:

- **Prefixo**: `br-` (ex: `br-button`, `br-input`)
- **Modificadores**: `.primary`, `.secondary`, `.small`, `.large`
- **Estados**: `.disabled`, `.active`, `.loading`, `.hover`

### Estrutura de Classes

```scss
.br-component {
  // Estilos base
  
  // Variantes
  &.primary { /* ... */ }
  &.secondary { /* ... */ }
  
  // Tamanhos
  &.small { /* ... */ }
  &.large { /* ... */ }
  
  // Estados
  &:disabled { /* ... */ }
  &.active { /* ... */ }
  &.loading { /* ... */ }
  
  // Modificadores
  &.block { /* ... */ }
  &.circle { /* ... */ }
}
```

### Exemplo Real: Button

Veja [`src/styles/_button.scss`](../src/styles/_button.scss) para referência completa.

## 🏗️ Criando Estilos para um Novo Componente

### Passo 1: Criar Arquivo SCSS

Crie `src/styles/_novocomponente.scss`:

```scss
.br-novocomponente {
  // Estilos base
  display: inline-block;
  padding: var(--spacing-scale-base);
  
  // Variantes
  &.primary {
    background-color: var(--blue-50);
    color: white;
  }
  
  &.secondary {
    background-color: var(--gray-10);
    color: var(--gray-90);
  }
  
  // Tamanhos
  &.small {
    padding: var(--spacing-scale-base);
    font-size: var(--font-size-scale-down-01);
  }
  
  &.large {
    padding: var(--spacing-scale-2x);
    font-size: var(--font-size-scale-up-01);
  }
  
  // Estados
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.active {
    background-color: var(--blue-60);
  }
  
  // Hover
  &:hover:not(:disabled) {
    background-color: var(--blue-40);
  }
  
  // Focus
  &:focus {
    outline: 2px solid var(--blue-50);
    outline-offset: 2px;
  }
}
```

### Passo 2: Importar no Índice

Edite `src/styles/_index.scss`:

```scss
@import "./novocomponente";
```

### Passo 3: Verificar no Componente

No componente TypeScript, certifique-se de que as classes correspondem:

```typescript
const variants = cva("br-novocomponente", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      sm: "small",
      lg: "large",
    },
  },
});
```

## 🎯 Padrões de Estilização

### Usar Variáveis do Design System

```scss
// ✅ Bom
.br-component {
  color: var(--blue-50);
  padding: var(--spacing-scale-base);
}

// ❌ Evitar valores hardcoded
.br-component {
  color: #2378c3;
  padding: 8px;
}
```

### Seguir Hierarquia de Especificidade

```scss
// ✅ Bom - Especificidade baixa
.br-component.primary { }
.br-component.disabled { }

// ❌ Evitar - Especificidade alta
.br-component.primary.disabled.active { }
```

### Estados e Pseudo-classes

```scss
.br-component {
  // Base
  background-color: var(--gray-10);
  
  // Hover
  &:hover:not(:disabled) {
    background-color: var(--gray-20);
  }
  
  // Focus (acessibilidade)
  &:focus {
    outline: 2px solid var(--blue-50);
    outline-offset: 2px;
  }
  
  // Active
  &:active:not(:disabled) {
    background-color: var(--gray-30);
  }
  
  // Disabled
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

### Responsividade

```scss
.br-component {
  // Mobile first
  width: 100%;
  
  // Tablet
  @media (min-width: 768px) {
    width: 50%;
  }
  
  // Desktop
  @media (min-width: 1024px) {
    width: 33.333%;
  }
}
```

## 🔧 Mixins e Funções Úteis

### Mixins do Design System

O `@govbr-ds/core` fornece mixins que você pode usar:

```scss
// Exemplo (consulte documentação do DS para mixins disponíveis)
.br-component {
  @include br-button-base; // Se disponível
}
```

### Criar Mixins Customizados

Se necessário, crie mixins reutilizáveis:

```scss
// Mixin para transições
@mixin transition($property: all, $duration: 0.2s) {
  transition: $property $duration ease-in-out;
}

.br-component {
  @include transition(background-color);
}
```

## 🎨 Temas e Dark Mode

### Suporte a Dark Mode

Alguns componentes suportam dark mode:

```scss
.br-component {
  // Light mode (padrão)
  background-color: var(--gray-10);
  color: var(--gray-90);
  
  // Dark mode
  .dark-mode & {
    background-color: var(--gray-80);
    color: var(--gray-10);
  }
}
```

No componente TypeScript:

```typescript
const variants = cva("br-component", {
  variants: {
    dark: {
      true: "dark-mode",
      false: "",
    },
  },
});
```

## 📦 Compilação e Build

### Durante Desenvolvimento

O Vite compila SCSS automaticamente quando você importa:

```typescript
import "../../style.css"; // Compila style.scss → style.css
```

### No Build de Produção

O plugin `vite-plugin-css-injected-by-js` injeta o CSS compilado no bundle JavaScript automaticamente.

### CSS Final

O CSS compilado é gerado em `src/style.css` e incluído no bundle final.

## ✅ Checklist de Estilização

Ao criar estilos para um novo componente:

- [ ] Arquivo SCSS criado em `src/styles/_novocomponente.scss`
- [ ] Importado em `src/styles/_index.scss`
- [ ] Classes seguem padrão `br-component`
- [ ] Variantes correspondem ao CVA do componente
- [ ] Usa variáveis do Design System
- [ ] Estados (hover, focus, disabled) implementados
- [ ] Acessibilidade (focus visible, contrast)
- [ ] Responsivo (se necessário)
- [ ] Testado no Storybook
- [ ] Dark mode (se aplicável)

## 🔍 Exemplos de Referência

Consulte estes arquivos como referência:

- **Simples**: [`_button.scss`](../src/styles/_button.scss)
- **Com Variantes**: [`_input.scss`](../src/styles/_input.scss)
- **Complexo**: [`_table.scss`](../src/styles/_table.scss)

## 📚 Recursos

- **[Design System Gov.br - Fundamentos Visuais](https://www.gov.br/ds/fundamentos-visuais/visao-geral)**
- **[Design System Gov.br - Componentes](https://www.gov.br/ds/components/visao-geral)**
- **[Documentação @govbr-ds/core](https://www.npmjs.com/package/@govbr-ds/core)**

## 🔄 Próximos Passos

- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Aprenda a criar componentes
- **[06. Storybook](./06-STORYBOOK.md)** - Documente componentes visualmente
- **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Revise padrões de código

---

**Dúvidas sobre estilos?** Consulte o [FAQ](./12-FAQ.md) ou veja exemplos nos componentes existentes.
