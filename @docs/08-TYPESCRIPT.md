# TypeScript e Configurações

Este guia explica as configurações TypeScript do projeto e como trabalhar com tipos.

## ⚙️ Configuração TypeScript

### Arquivo Principal: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "declaration": true,
    "typeRoots": ["./dist/index.d.ts"]
  },
  "include": ["src"],
  "exclude": ["src/**/__docs__", "src/**/__test__"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Configurações Importantes

#### Target e Lib

```json
"target": "ES2020",
"lib": ["ES2020", "DOM", "DOM.Iterable"]
```

- **target**: Versão do JavaScript gerado
- **lib**: Bibliotecas disponíveis (DOM para navegadores)

#### Module System

```json
"module": "ESNext",
"moduleResolution": "bundler"
```

- Suporta ES Modules modernos
- Resolução otimizada para bundlers (Vite)

#### JSX

```json
"jsx": "react-jsx"
```

- Novo transform JSX do React 17+
- Não requer `import React` em arquivos JSX

#### Strict Mode

```json
"strict": true
```

Habilita todas as verificações estritas:
- `noImplicitAny`
- `strictNullChecks`
- `strictFunctionTypes`
- `strictPropertyInitialization`
- `noImplicitThis`
- `alwaysStrict`

#### Path Aliases

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```

Permite imports com alias:

```typescript
import { Button } from '@/components/Button';
// Equivale a: import { Button } from './src/components/Button';
```

#### Declarações de Tipo

```json
"declaration": true,
"typeRoots": ["./dist/index.d.ts"]
```

- Gera arquivos `.d.ts` para a biblioteca
- Define onde encontrar tipos

### Arquivo Node: `tsconfig.node.json`

Para arquivos de configuração (Vite, etc.):

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## 📝 Tipos e Interfaces

### Padrões de Tipagem

#### Props de Componentes

```typescript
// ✅ Bom: Estende HTMLAttributes
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

// ❌ Evitar: Não estende HTMLAttributes
export type ButtonProps = {
  variant?: string;
  onClick?: () => void;
};
```

#### Tipos Union

```typescript
// ✅ Bom: Union types específicos
type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

// ❌ Evitar: string genérico
type Variant = string;
```

#### Generics

```typescript
// Para componentes genéricos
export type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSelect?: (item: T) => void;
};

// Uso
<ListProps<User> items={users} renderItem={...} />
```

#### Tipos de Eventos

```typescript
// ✅ Bom: Tipos específicos
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
};

// ❌ Evitar: any
const handleChange = (e: any) => {
  // ...
};
```

### Exemplos de Tipos

#### Componente com Ref

```typescript
export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary";
};

export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);
```

#### Componente com Children

```typescript
export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  disabled?: boolean;
};
```

#### Props com Callbacks

```typescript
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  onSearch?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
```

#### Tipos Complexos

```typescript
// Para DataTable
export type TColumns = Array<{
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: TRow) => React.ReactNode;
}>;

export type TRows = Array<Record<string, any>>;
```

## 🔧 Configuração do Vite com TypeScript

### Plugin React SWC

```typescript
// vite.config.ts
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
});
```

- **SWC**: Compilador rápido escrito em Rust
- Substitui Babel para transpilação
- Suporta TypeScript nativamente

### Plugin de Tipos

```typescript
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({ rollupTypes: true })
  ],
});
```

- Gera arquivos `.d.ts` automaticamente
- `rollupTypes: true` agrupa tipos em um arquivo

### Path Aliases no Vite

```typescript
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Também requer `vite-tsconfig-paths`:

```typescript
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: [path.resolve(__dirname, "tsconfig.json")],
    }),
  ],
});
```

## 🎯 Boas Práticas

### Evitar `any`

```typescript
// ❌ Evitar
function process(data: any) {
  return data.value;
}

// ✅ Bom
function process<T extends { value: unknown }>(data: T) {
  return data.value;
}
```

### Usar `unknown` ao invés de `any`

```typescript
// ❌ Evitar
function safeParse(json: string): any {
  return JSON.parse(json);
}

// ✅ Bom
function safeParse(json: string): unknown {
  return JSON.parse(json);
}
```

### Tipos de Retorno Explícitos

```typescript
// ✅ Bom: Tipo explícito
function getValue(): string {
  return "value";
}

// ✅ Bom: Inferência quando óbvio
const value = "value"; // Tipo inferido: string
```

### Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    // TypeScript sabe que value é string aqui
    console.log(value.toUpperCase());
  }
}
```

### Const Assertions

```typescript
// ✅ Bom: Array readonly
const variants = ["primary", "secondary"] as const;
type Variant = typeof variants[number]; // "primary" | "secondary"

// ❌ Evitar: Array mutável
const variants = ["primary", "secondary"];
type Variant = string; // Muito amplo
```

## 🐛 Troubleshooting

### Erro: "Cannot find module"

**Solução**: Verifique path aliases no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Erro: "Property does not exist on type"

**Solução**: Verifique se está estendendo o tipo correto:

```typescript
// Para button
React.HTMLAttributes<HTMLButtonElement>

// Para input
React.InputHTMLAttributes<HTMLInputElement>

// Para div
React.HTMLAttributes<HTMLDivElement>
```

### Erro: "JSX element implicitly has type 'any'"

**Solução**: Verifique se `jsx` está configurado:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

### Erro: "Cannot use JSX unless '--jsx' flag is provided"

**Solução**: Verifique extensão do arquivo (`.tsx` para JSX):

```typescript
// Arquivo: Component.tsx (não Component.ts)
export const Component = () => <div />;
```

## 📚 Recursos

- **[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)**
- **[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)**
- **[TypeScript Config Reference](https://www.typescriptlang.org/tsconfig)**

## 🔄 Próximos Passos

- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Use TypeScript em componentes
- **[09. Qualidade de Código](./09-QUALIDADE.md)** - Linting TypeScript
- **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Padrões TypeScript

---

**Dúvidas sobre TypeScript?** Consulte o [FAQ](./12-FAQ.md).
