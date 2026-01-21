# Setup Inicial do Projeto

Este guia explica como configurar o ambiente de desenvolvimento para trabalhar no projeto Gov-BR React UI.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### Software Necessário

- **Node.js** 18.0.0 ou superior
  - Verificar versão: `node --version`
  - Download: [nodejs.org](https://nodejs.org/)
  
- **npm** 9.0.0 ou superior (vem com Node.js)
  - Verificar versão: `npm --version`
  - Alternativas: `yarn` ou `pnpm` também são suportadas

- **Git** para controle de versão
  - Verificar versão: `git --version`
  - Download: [git-scm.com](https://git-scm.com/)

### Editor Recomendado

- **Visual Studio Code** (recomendado)
  - Download: [code.visualstudio.com](https://code.visualstudio.com/)
  - Extensões sugeridas (ver seção abaixo)

## 🚀 Instalação do Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/atejap05/gov-br-react-ui
cd gov-br-react-ui
```

### 2. Instalar Dependências

```bash
npm install
```

Este comando irá:
- Instalar todas as dependências listadas em `package.json`
- Criar a pasta `node_modules/`
- Gerar o arquivo `package-lock.json` (se não existir)

**Tempo estimado**: 2-5 minutos dependendo da conexão

### 3. Verificar Instalação

Execute o comando de build para verificar se tudo está funcionando:

```bash
npm run build
```

Se tudo estiver correto, você verá a pasta `dist/` sendo criada com os arquivos compilados.

## 🛠️ Scripts Disponíveis

O projeto inclui os seguintes scripts npm:

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento Vite
npm run dev
```
- Servidor local em `http://localhost:5173` (porta padrão do Vite)
- Hot Module Replacement (HMR) ativo
- Recarregamento automático ao salvar arquivos

### Storybook

```bash
# Inicia o Storybook para visualizar componentes
npm run storybook
```
- Interface em `http://localhost:6006`
- Documentação interativa dos componentes
- Hot reload automático

```bash
# Build estático do Storybook
npm run build-storybook
```
- Gera a pasta `storybook-static/` com build de produção
- Pode ser servido estaticamente ou publicado

### Build

```bash
# Build da biblioteca para produção
npm run build
```
- Compila TypeScript
- Gera bundles ES Module e UMD
- Cria arquivos `.d.ts` (declarações TypeScript)
- Saída em `dist/`

### Qualidade de Código

```bash
# Executa o linter ESLint
npm run lint
```
- Verifica problemas de código
- Reporta warnings e erros
- Configurado em `.eslintrc.cjs`

### Preview

```bash
# Preview do build de produção
npm run preview
```
- Serve localmente o build de produção
- Útil para testar antes de publicar

### Chromatic

```bash
# Publica no Chromatic para visual testing
npm run chromatic
```
- Requer token configurado em `chromatic.config.json`
- Usado para testes visuais automatizados

## ⚙️ Configuração do Editor

### Visual Studio Code

#### Extensões Recomendadas

Instale as seguintes extensões no VSCode:

1. **ESLint** (`dbaeumer.vscode-eslint`)
   - Validação de código em tempo real
   - Correções automáticas

2. **Prettier** (`esbenp.prettier-vscode`)
   - Formatação automática de código
   - (Opcional: se configurado no projeto)

3. **TypeScript and JavaScript Language Features**
   - Já incluído no VSCode
   - IntelliSense e validação de tipos

4. **SCSS IntelliSense** (`mrmlnc.vscode-scss`)
   - Autocomplete para SCSS
   - Validação de variáveis e mixins

5. **Storybook** (`storybook.storybook-vscode`)
   - Suporte para arquivos `.stories.tsx`
   - Navegação entre componentes e stories

#### Configurações Recomendadas

Crie ou edite `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "files.associations": {
    "*.scss": "scss"
  }
}
```

### Path Aliases

O projeto usa aliases de caminho configurados no `tsconfig.json`:

- `@/*` → `src/*`

Exemplo de uso:
```typescript
import { Button } from '@/components/Button';
```

O VSCode deve reconhecer automaticamente esses aliases se o TypeScript estiver configurado corretamente.

## 🔧 Configurações Adicionais

### Git Hooks (Opcional)

Para garantir qualidade antes de commits, você pode configurar hooks:

```bash
# Instalar husky (se disponível)
npm install --save-dev husky

# Configurar pre-commit hook
npx husky install
npx husky add .husky/pre-commit "npm run lint"
```

### Variáveis de Ambiente

O projeto não requer variáveis de ambiente para desenvolvimento local. Para publicação no Chromatic, o token está configurado em `chromatic.config.json`.

## ✅ Verificação do Setup

Execute este checklist para confirmar que tudo está configurado:

- [ ] Node.js 18+ instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] Repositório clonado
- [ ] Dependências instaladas (`npm install`)
- [ ] Build funciona (`npm run build`)
- [ ] Storybook inicia (`npm run storybook`)
- [ ] ESLint funciona (`npm run lint`)
- [ ] Editor configurado com extensões recomendadas

## 🐛 Troubleshooting

### Problemas Comuns

#### Erro: "Cannot find module"

**Solução**: Limpe o cache e reinstale:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Erro: "Port already in use"

**Solução**: Altere a porta no script ou mate o processo:
```bash
# Windows
netstat -ano | findstr :6006
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:6006 | xargs kill
```

#### Erro: "TypeScript errors"

**Solução**: Verifique se o TypeScript está atualizado:
```bash
npm install --save-dev typescript@latest
```

#### Storybook não inicia

**Solução**: Limpe o cache do Storybook:
```bash
rm -rf node_modules/.cache
npm run storybook
```

#### Build falha com erros de CSS

**Solução**: Verifique se `@govbr-ds/core` está instalado:
```bash
npm install @govbr-ds/core@^3.5.1
```

## 📚 Próximos Passos

Agora que o ambiente está configurado:

1. **[03. Uso em Projetos](./03-USO-EM-PROJETOS.md)** - Aprenda a usar a biblioteca em projetos React
2. **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Comece a desenvolver novos componentes
3. **[06. Storybook](./06-STORYBOOK.md)** - Explore a documentação interativa

## 💡 Dicas

- Use `npm run storybook` para visualizar componentes enquanto desenvolve
- Mantenha o terminal do Storybook aberto para ver mudanças em tempo real
- Configure o formato automático no editor para manter consistência
- Execute `npm run lint` antes de fazer commit

---

**Problemas?** Consulte o [FAQ](./12-FAQ.md) ou abra uma issue no repositório.
