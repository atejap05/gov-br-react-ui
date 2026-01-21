# FAQ e Troubleshooting

Perguntas frequentes e soluções para problemas comuns no projeto Gov-BR React UI.

## 📦 Instalação e Setup

### Como instalar a biblioteca?

```bash
npm install gov-br-react-ui
```

Veja mais detalhes em [03. Uso em Projetos](./03-USO-EM-PROJETOS.md).

### Preciso instalar o @govbr-ds/core separadamente?

Sim, você precisa instalar e importar os estilos do Design System:

```bash
npm install @govbr-ds/core
```

E importar no seu projeto:

```typescript
import '@govbr-ds/core/dist/core.min.css';
```

### Os estilos CSS não estão carregando

**Problema**: Componentes aparecem sem estilo.

**Soluções**:

1. Verifique se importou o CSS do Design System:
   ```typescript
   import '@govbr-ds/core/dist/core.min.css';
   ```

2. Verifique se os estilos estão sendo importados antes dos componentes:
   ```typescript
   // ✅ Correto
   import '@govbr-ds/core/dist/core.min.css';
   import { Button } from 'gov-br-react-ui';
   
   // ❌ Incorreto
   import { Button } from 'gov-br-react-ui';
   import '@govbr-ds/core/dist/core.min.css';
   ```

3. Verifique se o CSS está sendo carregado no HTML:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@govbr-ds/core@3.5.1/dist/core.min.css">
   ```

## 🔧 Desenvolvimento

### Como adicionar um novo componente?

Siga o guia completo em [04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md). Resumo:

1. Criar pasta em `src/components/NovoComponente/`
2. Implementar `NovoComponente.tsx`
3. Criar `index.ts` para exportação
4. Adicionar em `src/components/index.ts`
5. Criar estilos em `src/styles/_novocomponente.scss`
6. Importar estilos em `src/styles/_index.scss`
7. Criar story em `src/stories/components/NovoComponente.stories.tsx`

### Como usar CVA (Class Variance Authority)?

Veja exemplos em [04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md):

```typescript
import { cva } from "class-variance-authority";

const variants = cva("br-component", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      sm: "small",
      md: "medium",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
```

### Como criar estilos SCSS para um componente?

Veja [05. Estilização](./05-ESTILOS.md):

1. Criar `src/styles/_novocomponente.scss`
2. Seguir padrão `br-component`
3. Importar em `src/styles/_index.scss`

## 🐛 Erros Comuns

### Erro: "Cannot find module 'gov-br-react-ui'"

**Solução**:

```bash
npm install gov-br-react-ui
```

Verifique se está no diretório correto do projeto.

### Erro: "Invalid hook call"

**Problema**: Múltiplas versões do React instaladas.

**Solução**:

```bash
# Verificar versões
npm list react react-dom

# Reinstalar
npm install react@^18.2.0 react-dom@^18.2.0
```

### Erro TypeScript: "Property does not exist"

**Problema**: Props não estão tipadas corretamente.

**Solução**: Verifique se está estendendo o tipo correto:

```typescript
// Para button
React.HTMLAttributes<HTMLButtonElement>

// Para input
React.InputHTMLAttributes<HTMLInputElement>

// Para div
React.HTMLAttributes<HTMLDivElement>
```

Veja mais em [08. TypeScript](./08-TYPESCRIPT.md).

### Erro: "Port already in use" no Storybook

**Solução**:

```bash
# Windows
netstat -ano | findstr :6006
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:6006 | xargs kill
```

Ou altere a porta no script:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6007"
  }
}
```

### Build falha com erros de TypeScript

**Soluções**:

1. Limpar e reinstalar:
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. Verificar configuração TypeScript:
   ```bash
   npx tsc --noEmit
   ```

3. Verificar versão do TypeScript:
   ```bash
   npm install --save-dev typescript@^5.2.2
   ```

## 📝 Storybook

### Como adicionar uma nova story?

Veja [06. Storybook](./06-STORYBOOK.md):

1. Criar `src/stories/components/NovoComponente.stories.tsx`
2. Seguir estrutura básica:

```typescript
import { Meta, StoryObj } from "@storybook/react";
import { Component } from "../../components/Component";

const meta: Meta<typeof Component> = {
  title: "Components/Component",
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props
  },
};
```

### Storybook não inicia

**Soluções**:

1. Limpar cache:
   ```bash
   rm -rf node_modules/.cache
   npm run storybook
   ```

2. Reinstalar dependências:
   ```bash
   rm -rf node_modules
   npm install
   npm run storybook
   ```

3. Verificar versão do Node:
   ```bash
   node --version  # Deve ser 18+
   ```

## 🎨 Estilização

### Como adicionar estilos customizados?

Você pode sobrescrever estilos usando classes customizadas:

```tsx
<Button className="minha-classe-customizada">
  Clique
</Button>
```

```scss
.minha-classe-customizada {
  background-color: #custom-color;
}
```

### Como usar variáveis do Design System?

Veja [05. Estilização](./05-ESTILOS.md):

```scss
.br-component {
  color: var(--blue-50);
  padding: var(--spacing-scale-base);
}
```

## 🚀 Build e Publicação

### Como fazer build da biblioteca?

```bash
npm run build
```

Isso gera a pasta `dist/` com os arquivos compilados.

Veja mais em [07. Build e Publicação](./07-BUILD-PUBLICACAO.md).

### Como publicar no NPM?

Veja o guia completo em [07. Build e Publicação](./07-BUILD-PUBLICACAO.md):

1. Atualizar versão em `package.json`
2. `npm run build`
3. `npm publish`

### Build muito grande

**Soluções**:

1. Verifique se React está em `external` no `vite.config.ts`
2. Verifique imports (use tree-shaking)
3. Verifique se CSS não está duplicado

## 🔄 Atualizações

### Como atualizar a biblioteca?

```bash
npm update gov-br-react-ui
```

Para versão específica:

```bash
npm install gov-br-react-ui@0.0.8-beta
```

### Como atualizar dependências do projeto?

```bash
# Atualizar todas
npm update

# Atualizar específica
npm install @govbr-ds/core@latest
```

## 🆚 Diferenças

### Qual a diferença entre esta lib e @govbr-ds/webcomponents-react?

- **gov-br-react-ui**: Componentes React nativos, TypeScript, mais controle
- **@govbr-ds/webcomponents-react**: Wrapper de Web Components, menos controle

Esta biblioteca oferece:
- ✅ Componentes React puros
- ✅ TypeScript completo
- ✅ Mais flexibilidade
- ✅ Melhor integração com React

### Posso usar junto com outras bibliotecas de UI?

Sim, mas certifique-se de que não há conflitos de CSS. Use namespaces ou CSS modules se necessário.

## 📚 Recursos

### Onde encontrar exemplos?

- **Storybook Online**: [Visualizar Componentes](https://main--660d686fca703150f4bd09bd.chromatic.com)
- **Código fonte**: Veja `src/stories/exemplos/` para casos de uso

### Onde está a documentação do Design System?

- [Design System Gov.br](https://www.gov.br/ds/home)
- [Componentes](https://www.gov.br/ds/components/visao-geral)
- [Padrões](https://www.gov.br/ds/padroes/visao-geral)

## 💡 Dicas

### Performance

- Use `React.memo` para componentes pesados
- Lazy load componentes grandes
- Evite re-renders desnecessários

Veja mais em [10. Boas Práticas](./10-BOAS-PRATICAS.md).

### Acessibilidade

- Sempre use atributos ARIA quando necessário
- Suporte navegação por teclado
- Mantenha contraste adequado

### TypeScript

- Evite `any`
- Use tipos específicos
- Aproveite type guards

Veja mais em [08. TypeScript](./08-TYPESCRIPT.md).

## ❓ Não Encontrou a Resposta?

- Consulte a documentação específica nos outros guias
- Veja exemplos no código fonte (`src/components/`)
- Abra uma issue no repositório GitHub
- Consulte o Storybook para exemplos visuais

## 🔗 Links Úteis

- **[README Principal](./README.md)** - Índice da documentação
- **[Storybook Online](https://main--660d686fca703150f4bd09bd.chromatic.com)** - Componentes em ação
- **[Design System Gov.br](https://www.gov.br/ds/home)** - Documentação oficial
- **[Repositório GitHub](https://github.com/atejap05/gov-br-react-ui)** - Código fonte

---

**Ainda com dúvidas?** Abra uma issue no repositório ou consulte os outros guias de documentação.
