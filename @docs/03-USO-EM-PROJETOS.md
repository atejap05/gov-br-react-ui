# Usando a Biblioteca em Projetos

Este guia explica como integrar e usar a biblioteca **Gov-BR React UI** em projetos React.

## 📦 Instalação

### Via NPM

```bash
npm install gov-br-react-ui
```

### Versão Atual

- **Versão**: `0.0.8-beta`
- **Package**: `gov-br-react-ui`
- **Repositório**: [GitHub](https://github.com/atejap05/gov-br-react-ui)

## ⚙️ Pré-requisitos

A biblioteca requer:

- **React** 18.2.0 ou superior
- **React-DOM** 18.2.0 ou superior

Estas dependências devem estar instaladas no seu projeto:

```bash
npm install react react-dom
```

## 🚀 Setup Básico

### 1. Importar Estilos do Design System

A biblioteca depende do Design System oficial do Governo Federal. Você precisa importar os estilos base:

#### Opção A: Via CDN (Mais Simples)

Adicione no `<head>` do seu HTML ou no arquivo principal:

```html
<!-- Fontes -->
<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/rawline">
<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/raleway-5">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

<!-- Design System Core -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@govbr-ds/core@3.5.1/dist/core.min.css">
```

#### Opção B: Via NPM (Recomendado)

```bash
npm install @govbr-ds/core
```

Depois, importe no seu arquivo principal (ex: `main.tsx`, `App.tsx`):

```typescript
import '@govbr-ds/core/dist/core.min.css';
```

### 2. Importar Componentes

```typescript
import { Button, Input, Card } from 'gov-br-react-ui';
```

Os estilos CSS são injetados automaticamente junto com os componentes.

### 3. Configurar FontAwesome (Opcional)

Se você usar componentes com ícones, configure o FontAwesome:

```typescript
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Desabilita CSS automático (já incluído)
config.autoAddCss = false;
```

## 📝 Exemplos de Uso

### Exemplo Básico

```tsx
import React from 'react';
import { Button, Input, Card } from 'gov-br-react-ui';
import '@govbr-ds/core/dist/core.min.css';

function App() {
  return (
    <div>
      <Card>
        <h2>Formulário</h2>
        <Input 
          label="Nome" 
          placeholder="Digite seu nome"
        />
        <Button variant="primary">
          Enviar
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

### Exemplo com TypeScript

```tsx
import React, { useState } from 'react';
import { Button, Input, Card, CardHeader, CardContent } from 'gov-br-react-ui';
import '@govbr-ds/core/dist/core.min.css';

interface FormData {
  name: string;
  email: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <CardHeader>
        <h3>Contato</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Button type="submit" variant="primary">
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
```

## 🎨 Configuração por Framework

### Vite + React

#### 1. Criar Projeto

```bash
npm create vite@latest meu-projeto -- --template react-ts
cd meu-projeto
npm install
```

#### 2. Instalar Dependências

```bash
npm install gov-br-react-ui @govbr-ds/core
```

#### 3. Configurar `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

#### 4. Importar no `main.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@govbr-ds/core/dist/core.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

#### 5. Usar Componentes

```tsx
// App.tsx
import { Button } from 'gov-br-react-ui';

function App() {
  return <Button variant="primary">Clique aqui</Button>;
}

export default App;
```

### Next.js (App Router)

#### 1. Criar Projeto

```bash
npx create-next-app@latest meu-projeto --typescript
cd meu-projeto
```

#### 2. Instalar Dependências

```bash
npm install gov-br-react-ui @govbr-ds/core
```

#### 3. Configurar `app/layout.tsx`

```typescript
import '@govbr-ds/core/dist/core.min.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

#### 4. Criar Componente Client

Como alguns componentes podem usar hooks do React, crie um componente client:

```tsx
// app/components/Form.tsx
'use client';

import { Button, Input } from 'gov-br-react-ui';
import { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Campo"
      />
      <Button variant="primary">Enviar</Button>
    </div>
  );
}
```

#### 5. Usar no `app/page.tsx`

```tsx
import Form from './components/Form';

export default function Home() {
  return (
    <main>
      <h1>Meu App</h1>
      <Form />
    </main>
  );
}
```

### Create React App (CRA)

#### 1. Criar Projeto

```bash
npx create-react-app meu-projeto --template typescript
cd meu-projeto
```

#### 2. Instalar Dependências

```bash
npm install gov-br-react-ui @govbr-ds/core
```

#### 3. Importar no `src/index.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@govbr-ds/core/dist/core.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 🔧 Configuração TypeScript

### `tsconfig.json`

Certifique-se de que seu `tsconfig.json` inclui:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "strict": true
  }
}
```

### Tipos Automáticos

A biblioteca inclui arquivos `.d.ts` automaticamente. Não é necessário instalar `@types/gov-br-react-ui`.

## 📚 Componentes Disponíveis

Veja a lista completa em [11. Componentes Disponíveis](./11-COMPONENTES.md).

### Exemplos Rápidos

#### Button

```tsx
import { Button } from 'gov-br-react-ui';

<Button variant="primary" size="md">Clique</Button>
<Button variant="secondary" disabled>Desabilitado</Button>
<Button variant="danger" loading>Carregando...</Button>
```

#### Input

```tsx
import { Input } from 'gov-br-react-ui';

<Input label="Nome" placeholder="Digite seu nome" />
<Input label="Email" type="email" status="success" />
<Input label="Senha" type="password" feedback="Senha segura" />
```

#### Card

```tsx
import { Card, CardHeader, CardContent, CardFooter } from 'gov-br-react-ui';

<Card>
  <CardHeader>
    <h3>Título</h3>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

## 🐛 Troubleshooting

### CSS não está carregando

**Problema**: Componentes aparecem sem estilo.

**Solução**: Certifique-se de importar o CSS do Design System:

```typescript
import '@govbr-ds/core/dist/core.min.css';
```

### Erros de TypeScript

**Problema**: Tipos não são reconhecidos.

**Solução**: 
1. Verifique se `react` e `react-dom` estão instalados
2. Reinicie o servidor TypeScript no editor
3. Execute `npm install` novamente

### Conflitos de versão do React

**Problema**: Erro "Invalid hook call" ou similar.

**Solução**: Certifique-se de usar React 18+:

```bash
npm install react@^18.2.0 react-dom@^18.2.0
```

### Componentes não renderizam

**Problema**: Componentes aparecem vazios ou quebrados.

**Solução**:
1. Verifique se os estilos do Design System estão importados
2. Verifique o console do navegador para erros
3. Certifique-se de que está usando a versão correta do React

### Erro de módulo não encontrado

**Problema**: `Cannot find module 'gov-br-react-ui'`.

**Solução**:
```bash
npm install gov-br-react-ui
# ou
npm install --save gov-br-react-ui
```

## 📖 Recursos Adicionais

- **[Storybook Online](https://main--660d686fca703150f4bd09bd.chromatic.com)** - Veja todos os componentes em ação
- **[Design System Gov.br](https://www.gov.br/ds/home)** - Documentação oficial
- **[11. Componentes Disponíveis](./11-COMPONENTES.md)** - Lista completa de componentes

## 💡 Boas Práticas

1. **Importe estilos uma vez**: Importe `@govbr-ds/core` apenas no arquivo principal
2. **Use TypeScript**: Aproveite a tipagem completa dos componentes
3. **Consulte o Storybook**: Veja exemplos de uso para cada componente
4. **Mantenha atualizado**: Atualize a biblioteca regularmente para correções

## 🔄 Atualizando a Biblioteca

```bash
npm update gov-br-react-ui
```

Para atualizar para uma versão específica:

```bash
npm install gov-br-react-ui@0.0.8-beta
```

---

**Precisa de ajuda?** Consulte o [FAQ](./12-FAQ.md) ou abra uma issue no repositório.
