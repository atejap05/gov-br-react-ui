# Qualidade de Código

Este guia explica as ferramentas e padrões para manter a qualidade do código no projeto.

## 🔍 ESLint

### Configuração

O projeto usa ESLint configurado em [`.eslintrc.cjs`](../.eslintrc.cjs):

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
```

### Executar Linter

```bash
npm run lint
```

### Extensões Configuradas

#### eslint:recommended
- Regras básicas recomendadas do ESLint

#### @typescript-eslint/recommended
- Regras específicas para TypeScript
- Validação de tipos e padrões TS

#### plugin:react-hooks/recommended
- Regras para React Hooks
- Detecta violações das regras dos hooks

#### plugin:storybook/recommended
- Regras específicas para arquivos Storybook
- Validação de stories e configurações

### Regras Customizadas

#### react-refresh/only-export-components

```javascript
'react-refresh/only-export-components': [
  'warn',
  { allowConstantExport: true },
]
```

- Garante que apenas componentes React são exportados
- Permite exportação de constantes

## 📋 Padrões de Código

### Nomenclatura

#### Componentes

```typescript
// ✅ Bom: PascalCase
export const Button = () => { };
export const DataTable = () => { };

// ❌ Evitar: camelCase
export const button = () => { };
```

#### Arquivos

- **Componentes**: `Button.tsx`, `DataTable.tsx` (PascalCase)
- **Utilitários**: `utils.ts`, `helpers.ts` (camelCase)
- **Estilos**: `_button.scss` (snake_case com underscore)

#### Variáveis e Funções

```typescript
// ✅ Bom: camelCase
const buttonVariants = cva("br-button");
const handleClick = () => { };

// ❌ Evitar: snake_case ou PascalCase
const button_variants = cva("br-button");
const HandleClick = () => { };
```

#### Constantes

```typescript
// ✅ Bom: UPPER_SNAKE_CASE
const MAX_SIZE = 100;
const DEFAULT_VARIANT = "primary";

// ✅ Bom: camelCase para constantes de objeto
const defaultProps = {
  variant: "primary",
  size: "md",
};
```

### Estrutura de Arquivos

#### Ordem de Imports

```typescript
// 1. Imports de bibliotecas externas
import React from "react";
import { cva } from "class-variance-authority";

// 2. Imports de estilos
import "../../style.css";

// 3. Imports internos (componentes, hooks, utils)
import { useHook } from "../../hooks/useHook";
import { Component } from "../Component";

// 4. Imports de tipos (se necessário)
import type { ComponentProps } from "./types";
```

#### Organização de Componentes

```typescript
// 1. Imports
import React from "react";

// 2. Variantes CVA
const variants = cva("br-component", { /* ... */ });

// 3. Tipos
export type ComponentProps = { /* ... */ };

// 4. Componente
export const Component = React.forwardRef(/* ... */);

// 5. Display name
Component.displayName = "Component";
```

### Formatação

#### Indentação

- **2 espaços** (padrão do projeto)
- Não usar tabs

#### Aspas

- **Aspas simples** para strings JavaScript/TypeScript
- **Aspas duplas** para atributos JSX (se configurado)

```typescript
// ✅ Bom
const text = 'Hello';
<div className="br-button">Click</div>

// ❌ Evitar
const text = "Hello";
<div className='br-button'>Click</div>
```

#### Ponto e Vírgula

- **Sempre usar** ponto e vírgula (padrão do projeto)

```typescript
// ✅ Bom
const value = "test";

// ❌ Evitar
const value = "test"
```

### Comentários

#### Quando Comentar

- ✅ Explicar "por quê", não "o quê"
- ✅ Documentar APIs públicas
- ✅ Explicar lógica complexa
- ❌ Não comentar código óbvio

#### Estilo de Comentários

```typescript
// ✅ Bom: Comentário de linha
// Este componente usa CVA para variantes
const variants = cva("br-button", { /* ... */ });

// ✅ Bom: Comentário de bloco para seções
/**
 * Componente Button
 * 
 * Implementa o botão do Design System Gov.br
 * Suporta múltiplas variantes e tamanhos
 */
export const Button = () => { };

// ❌ Evitar: Comentários desnecessários
const value = 10; // Define value como 10
```

## ✅ Checklist de Qualidade

Antes de fazer commit:

- [ ] Código segue padrões de nomenclatura
- [ ] Imports organizados corretamente
- [ ] ESLint passa (`npm run lint`)
- [ ] TypeScript compila sem erros
- [ ] Sem variáveis não utilizadas
- [ ] Sem imports não utilizados
- [ ] Comentários apenas quando necessário
- [ ] Código formatado consistentemente

## 🛠️ Ferramentas Recomendadas

### Prettier (Opcional)

Se configurado, Prettier formata código automaticamente:

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### EditorConfig

Padroniza configurações do editor:

```ini
# .editorconfig
root = true

[*.{ts,tsx,js,jsx}]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## 🐛 Problemas Comuns

### Variável não utilizada

**Erro**: `'variable' is assigned a value but never used`

**Solução**:
```typescript
// Remover ou prefixar com underscore
const _unused = value; // ESLint ignora
```

### Import não utilizado

**Erro**: `'Component' is defined but never used`

**Solução**:
```typescript
// Remover import ou usar
import type { Component } from "./Component"; // type-only import
```

### Hook fora de componente

**Erro**: `React Hook "useState" is called conditionally`

**Solução**: Sempre chamar hooks no topo do componente:

```typescript
// ✅ Bom
const Component = () => {
  const [state, setState] = useState();
  if (condition) return null;
  // ...
};

// ❌ Evitar
const Component = () => {
  if (condition) {
    const [state, setState] = useState(); // Erro!
  }
};
```

## 📊 Métricas de Qualidade

### Manter

- ✅ **Cobertura de tipos**: 100% (TypeScript strict)
- ✅ **Sem `any`**: Evitar uso de `any`
- ✅ **Sem warnings**: ESLint sem warnings críticos
- ✅ **Build limpo**: Build sem erros

## 🔄 Integração Contínua

### Pre-commit Hooks (Opcional)

Configure hooks para rodar linter antes de commits:

```bash
# Com husky
npx husky install
npx husky add .husky/pre-commit "npm run lint"
```

## 📚 Recursos

- **[ESLint Rules](https://eslint.org/docs/rules/)**
- **[TypeScript ESLint](https://typescript-eslint.io/)**
- **[React Hooks Rules](https://react.dev/reference/rules/rules-of-hooks)**

## 🔄 Próximos Passos

- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Aplique padrões ao desenvolver
- **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Revise práticas recomendadas
- **[12. FAQ](./12-FAQ.md)** - Soluções para problemas comuns

---

**Dúvidas sobre qualidade?** Consulte o [FAQ](./12-FAQ.md).
