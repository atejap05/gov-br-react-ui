# 🗺️ Roadmap - Versão Estável e Publicação

Este documento detalha os próximos passos necessários para preparar a biblioteca **gov-br-react-ui** para sua primeira versão estável (v1.0.0) e garantir a publicação adequada tanto da biblioteca quanto do Storybook no Chromatic.

## 📊 Status Atual

- **Versão Atual**: `0.0.8-beta`
- **Versão Alvo**: `1.0.0` (primeira versão estável)
- **Storybook**: Configurado com Chromatic
- **NPM Package**: [gov-br-react-ui](https://www.npmjs.com/package/gov-br-react-ui)
- **Chromatic**: [Visualizar Storybook](https://main--660d686fca703150f4bd09bd.chromatic.com)

---

## 🎯 Objetivos

1. ✅ **Testes Completos**: Garantir que todos os componentes funcionam corretamente
2. ✅ **Documentação Completa**: Todos os componentes documentados no Storybook
3. ✅ **Build Otimizado**: Build de produção sem erros ou warnings
4. ✅ **Publicação NPM**: Publicar versão 1.0.0 no NPM
5. ✅ **Publicação Chromatic**: Garantir Storybook acessível online permanentemente
6. ✅ **CI/CD**: Configurar automação para futuras publicações

---

## 📋 Fase 1: Preparação e Testes

### 1.1 Testes de Componentes

#### Checklist de Testes Manuais

- [ ] **Button**
  - [ ] Todas as variantes renderizam corretamente
  - [ ] Estados (hover, focus, disabled) funcionam
  - [ ] Ícones são exibidos corretamente
  - [ ] Callbacks `onClick` funcionam

- [ ] **Input**
  - [ ] Validação de tipos funciona
  - [ ] Estados de erro/sucesso exibem corretamente
  - [ ] Placeholder e labels funcionam
  - [ ] Máscaras (se houver) aplicam corretamente

- [ ] **Checkbox**
  - [ ] Estado controlado funciona
  - [ ] Estado não controlado funciona
  - [ ] Sem warnings de React (`checked` vs `defaultChecked`)

- [ ] **Upload**
  - [ ] Upload de arquivos funciona
  - [ ] Sem loops infinitos de re-render
  - [ ] Callback `onChange` funciona corretamente

- [ ] **Menu**
  - [ ] Abre/fecha corretamente
  - [ ] Modos `offcanvas` e `push` funcionam
  - [ ] Subitens (layers) expandem/colapsam
  - [ ] Integração com Header funciona

- [ ] **Header**
  - [ ] Todas as props opcionais funcionam
  - [ ] Integração com Menu funciona
  - [ ] Persona exibe corretamente
  - [ ] Links rápidos funcionam

- [ ] **Tag, TagStatus, TagCount, TagSelection**
  - [ ] Todas as variantes renderizam
  - [ ] Seleção múltipla funciona
  - [ ] Seleção única funciona
  - [ ] Estados visuais corretos

- [ ] **Pagination**
  - [ ] Navegação entre páginas funciona
  - [ ] Ellipsis exibe corretamente
  - [ ] Callback `onChange` funciona

- [ ] **Loading**
  - [ ] Animação funciona
  - [ ] Indicador de progresso funciona
  - [ ] Tamanhos diferentes renderizam

- [ ] **Persona**
  - [ ] Foto exibe corretamente
  - [ ] Fallback quando sem foto funciona
  - [ ] Descrições longas truncam corretamente

- [ ] **Card, Alert, Avatar**
  - [ ] Renderizam corretamente
  - [ ] Todas as props funcionam
  - [ ] Estados visuais corretos

#### Testes de Integração

- [ ] **Header + Menu**: Integração completa funciona
- [ ] **Formulários**: Componentes de formulário funcionam juntos
- [ ] **Navegação**: Menu com subitens funciona corretamente

#### Testes de Acessibilidade

- [ ] **ARIA Labels**: Todos os componentes têm labels apropriados
- [ ] **Keyboard Navigation**: Navegação por teclado funciona
- [ ] **Screen Readers**: Componentes são acessíveis para leitores de tela
- [ ] **Contraste**: Cores atendem WCAG AA mínimo

**Ferramentas Recomendadas:**
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 1.2 Testes de Build

```bash
# Limpar builds anteriores
rm -rf dist storybook-static node_modules/.vite

# Build de produção
npm run build

# Verificar arquivos gerados
ls -la dist/
# Deve conter:
# - index.es.js (ES modules)
# - index.umd.js (UMD)
# - index.d.ts (TypeScript definitions)
# - Arquivos .map (source maps)

# Verificar tamanho dos arquivos
du -sh dist/*

# Build do Storybook
npm run build-storybook

# Verificar Storybook estático
ls -la storybook-static/
```

**Checklist:**
- [ ] Build executa sem erros
- [ ] Todos os arquivos esperados são gerados
- [ ] Tamanhos de arquivo são razoáveis (< 500KB para UMD)
- [ ] Source maps são gerados
- [ ] TypeScript definitions estão completas
- [ ] Storybook build funciona sem erros

### 1.3 Testes de TypeScript

```bash
# Verificar tipos
npx tsc --noEmit

# Verificar tipos do pacote
npm pack --dry-run
```

**Checklist:**
- [ ] Sem erros de TypeScript
- [ ] Tipos exportados corretamente
- [ ] `index.d.ts` está completo
- [ ] Tipos de props estão corretos

### 1.4 Testes de Linter

```bash
# Executar linter
npm run lint

# Corrigir automaticamente (se possível)
npm run lint -- --fix
```

**Checklist:**
- [ ] Sem erros de lint
- [ ] Warnings críticos resolvidos
- [ ] Código segue padrões do projeto

### 1.5 Testes de Instalação Local

```bash
# Criar pacote local
npm pack

# Em outro projeto, testar instalação
npm install /caminho/para/gov-br-react-ui-0.0.8-beta.tgz

# Testar importação
# Em um arquivo de teste:
import { Button, Header, Menu } from 'gov-br-react-ui';
```

**Checklist:**
- [ ] Pacote instala sem erros
- [ ] Componentes podem ser importados
- [ ] Tipos TypeScript funcionam
- [ ] CSS/estilos são aplicados corretamente

---

## 📋 Fase 2: Documentação e Storybook

### 2.1 Revisão de Stories

**Status Atual:**
- ✅ Menu.stories.tsx - Criado
- ✅ Tag.stories.tsx - Criado
- ✅ Pagination.stories.tsx - Criado
- ✅ Loading.stories.tsx - Criado
- ✅ Persona.stories.tsx - Criado
- ✅ HeaderWithMenu.stories.tsx - Criado
- ✅ Button.stories.tsx - Atualizado
- ✅ Alert.stories.tsx - Atualizado
- ✅ Avatar.stories.tsx - Atualizado
- ✅ Card.stories.tsx - Atualizado
- ✅ header.stories.tsx - Atualizado

**Pendências:**
- [ ] Verificar se todos os componentes têm stories
- [ ] Adicionar stories para componentes faltantes (se houver)
- [ ] Revisar todas as stories para garantir que seguem CSF 3.0
- [ ] Adicionar exemplos de uso avançado
- [ ] Adicionar documentação em Markdown para componentes complexos

### 2.2 Melhorias na Documentação

- [ ] **README.md Principal**
  - [ ] Atualizar com instruções de instalação da v1.0.0
  - [ ] Adicionar exemplos de uso básico
  - [ ] Adicionar link para Storybook online
  - [ ] Adicionar badges (npm version, license, etc.)

- [ ] **Documentação de Componentes**
  - [ ] JSDoc completo em todos os componentes
  - [ ] Exemplos de código nos stories
  - [ ] Documentação de props e tipos

- [ ] **Guia de Migração** (se necessário)
  - [ ] Documentar breaking changes (se houver)
  - [ ] Guia de migração de beta para estável

### 2.3 Configuração do Storybook

- [ ] **Preview Config**
  - [ ] Verificar configurações globais
  - [ ] Adicionar decorators se necessário
  - [ ] Configurar parâmetros globais

- [ ] **Addons**
  - [ ] Verificar se todos os addons necessários estão instalados
  - [ ] Configurar addons adequadamente
  - [ ] Testar funcionalidades dos addons

---

## 📋 Fase 3: Otimização e Preparação para Produção

### 3.1 Otimização de Build

- [ ] **Bundle Size**
  - [ ] Analisar tamanho do bundle
  - [ ] Verificar dependências desnecessárias
  - [ ] Otimizar imports
  - [ ] Considerar code splitting se necessário

- [ ] **Tree Shaking**
  - [ ] Verificar se tree shaking funciona
  - [ ] Testar importações individuais
  - [ ] Garantir que apenas código usado é incluído

- [ ] **Source Maps**
  - [ ] Verificar se source maps são gerados
  - [ ] Testar debug em produção

### 3.2 Verificação de Dependências

```bash
# Verificar dependências desatualizadas
npm outdated

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades (se possível)
npm audit fix
```

**Checklist:**
- [ ] Todas as dependências estão atualizadas (quando possível)
- [ ] Vulnerabilidades críticas resolvidas
- [ ] `peerDependencies` estão corretas
- [ ] `devDependencies` não estão em produção

### 3.3 Configuração de Package.json

**Verificações:**
- [ ] `version` está correta para 1.0.0
- [ ] `main`, `module`, `types` apontam para arquivos corretos
- [ ] `exports` está configurado corretamente
- [ ] `files` inclui apenas o necessário (`dist/`)
- [ ] `publishConfig.access` está como `"public"`
- [ ] `keywords` estão definidos (para descoberta no NPM)
- [ ] `repository` está configurado
- [ ] `license` está definido
- [ ] `author` está definido

**Exemplo de package.json para v1.0.0:**
```json
{
  "name": "gov-br-react-ui",
  "version": "1.0.0",
  "description": "Biblioteca de componentes React seguindo o Design System do Governo Federal",
  "main": "dist/index.umd.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "keywords": [
    "react",
    "components",
    "design-system",
    "govbr",
    "governo-federal",
    "ui",
    "typescript"
  ],
  "author": "Seu Nome <seu.email@exemplo.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/atejap05/gov-br-react-ui.git"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

---

## 📋 Fase 4: Configuração do Chromatic

### 4.1 Configuração Inicial

**Status Atual:**
- ✅ Chromatic já está configurado
- ✅ Token está no `package.json`
- ✅ Addon `@chromatic-com/storybook` está instalado

### 4.2 Configuração Avançada

- [ ] **Criar `chromatic.config.json`** (opcional, mas recomendado)

```json
{
  "projectToken": "chpt_e145a2c5c679c8b",
  "buildScriptName": "build-storybook",
  "exitZeroOnChanges": false,
  "exitOnceUploaded": true,
  "zip": true
}
```

- [ ] **Configurar Variantes** (se necessário)
  - [ ] Configurar diferentes viewports
  - [ ] Configurar temas (se houver)
  - [ ] Configurar estados customizados

- [ ] **Configurar CI/CD** (GitHub Actions)

Criar `.github/workflows/chromatic.yml`:

```yaml
name: 'Chromatic'

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - main

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: build-storybook
          exitOnceUploaded: true
```

**Checklist:**
- [ ] Token do Chromatic configurado como secret no GitHub
- [ ] Workflow testado e funcionando
- [ ] Storybook publica automaticamente em cada push

### 4.3 Teste de Publicação no Chromatic

```bash
# Build do Storybook
npm run build-storybook

# Publicar no Chromatic
npm run chromatic

# Ou com opções específicas
npx chromatic --project-token=chpt_e145a2c5c679c8b --exit-once-uploaded
```

**Checklist:**
- [ ] Storybook publica sem erros
- [ ] Link de acesso funciona
- [ ] Todas as stories estão visíveis
- [ ] Navegação funciona corretamente
- [ ] Documentação está completa

---

## 📋 Fase 5: Versionamento e Publicação

### 5.1 Preparação para v1.0.0

**Decisões Necessárias:**
- [ ] Revisar todas as APIs públicas
- [ ] Garantir que não há breaking changes não documentados
- [ ] Decidir se manteremos suporte a versões beta anteriores
- [ ] Documentar todas as mudanças desde última versão beta

### 5.2 Atualização de Versão

```bash
# Atualizar para 1.0.0
npm version 1.0.0

# Isso automaticamente:
# - Atualiza package.json
# - Cria commit
# - Cria tag v1.0.0
```

**Ou manualmente:**
1. Editar `package.json`: `"version": "1.0.0"`
2. Commit: `git commit -m "chore: versão 1.0.0 - primeira versão estável"`
3. Tag: `git tag v1.0.0`

### 5.3 Checklist Final Antes da Publicação

**Código:**
- [ ] Todos os testes passam
- [ ] Build funciona sem erros
- [ ] Linter sem erros
- [ ] TypeScript compila sem erros
- [ ] Storybook funciona localmente

**Documentação:**
- [ ] README.md atualizado
- [ ] Todas as stories documentadas
- [ ] JSDoc completo
- [ ] Changelog atualizado (se mantido)

**Configuração:**
- [ ] package.json correto
- [ ] .gitignore atualizado
- [ ] .npmignore configurado (se necessário)

**Git:**
- [ ] Todas as mudanças commitadas
- [ ] Branch main sincronizada
- [ ] Tag criada

### 5.4 Processo de Publicação

#### Passo 1: Build Final

```bash
# Limpar
rm -rf dist storybook-static

# Build
npm run build

# Verificar
ls -la dist/
```

#### Passo 2: Verificar Conteúdo do Pacote

```bash
# Dry run
npm pack --dry-run

# Criar pacote para inspeção
npm pack
# Inspecionar: gov-br-react-ui-1.0.0.tgz
```

#### Passo 3: Login no NPM

```bash
# Verificar login
npm whoami

# Se não estiver logado
npm login
```

#### Passo 4: Publicar no NPM

```bash
# Publicar versão estável
npm publish

# Verificar publicação
npm view gov-br-react-ui

# Testar instalação
npm install gov-br-react-ui@1.0.0
```

#### Passo 5: Publicar Storybook no Chromatic

```bash
# Build do Storybook
npm run build-storybook

# Publicar
npm run chromatic
```

#### Passo 6: Git - Push e Tags

```bash
# Push commits
git push origin main

# Push tags
git push origin --tags

# Ou tag específica
git push origin v1.0.0
```

### 5.5 Verificação Pós-Publicação

- [ ] **NPM**
  - [ ] Versão aparece em: https://www.npmjs.com/package/gov-br-react-ui
  - [ ] Instalação funciona: `npm install gov-br-react-ui@1.0.0`
  - [ ] Componentes podem ser importados
  - [ ] Tipos TypeScript funcionam

- [ ] **Chromatic**
  - [ ] Storybook atualizado e acessível
  - [ ] Link funciona: https://main--660d686fca703150f4bd09bd.chromatic.com
  - [ ] Todas as stories visíveis
  - [ ] Documentação completa

- [ ] **Git**
  - [ ] Tag criada e pushada
  - [ ] Commits no histórico
  - [ ] Release notes (se mantido)

---

## 📋 Fase 6: CI/CD e Automação

### 6.1 GitHub Actions para Build e Testes

Criar `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm run build-storybook
```

### 6.2 GitHub Actions para Publicação Automática

Criar `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Publish Storybook
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: build-storybook
```

**Configuração Necessária:**
- [ ] Criar `NPM_TOKEN` secret no GitHub
- [ ] Criar `CHROMATIC_PROJECT_TOKEN` secret no GitHub
- [ ] Testar workflow

---

## 📋 Fase 7: Pós-Lançamento

### 7.1 Comunicação

- [ ] **Anúncio**
  - [ ] Criar release notes
  - [ ] Anunciar em canais relevantes
  - [ ] Atualizar documentação pública

- [ ] **Monitoramento**
  - [ ] Monitorar downloads no NPM
  - [ ] Monitorar issues no GitHub
  - [ ] Coletar feedback de usuários

### 7.2 Manutenção Contínua

- [ ] **Planejamento**
  - [ ] Roadmap para próximas versões
  - [ ] Priorização de features
  - [ ] Resolução de bugs reportados

- [ ] **Documentação**
  - [ ] Manter documentação atualizada
  - [ ] Adicionar exemplos conforme necessário
  - [ ] Responder a questões da comunidade

---

## 🔧 Scripts Úteis

Adicionar ao `package.json`:

```json
{
  "scripts": {
    "prepublishOnly": "npm run lint && npm run build",
    "release:patch": "npm version patch && npm run build && npm publish && npm run chromatic && git push --follow-tags",
    "release:minor": "npm version minor && npm run build && npm publish && npm run chromatic && git push --follow-tags",
    "release:major": "npm version major && npm run build && npm publish && npm run chromatic && git push --follow-tags",
    "test:build": "npm run build && npm pack --dry-run",
    "test:install": "npm pack && npm install -g ./gov-br-react-ui-*.tgz"
  }
}
```

---

## 📚 Recursos e Referências

### Documentação Oficial

- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Chromatic Documentation](https://www.chromatic.com/docs/)
- [Storybook Deployment](https://storybook.js.org/docs/react/sharing/publish-storybook)
- [Semantic Versioning](https://semver.org/)

### Ferramentas Recomendadas

- **Bundle Analyzer**: `npm install --save-dev vite-bundle-visualizer`
- **Size Limit**: Para monitorar tamanho do bundle
- **np**: Ferramenta para publicação de pacotes NPM

---

## ✅ Checklist Geral de Lançamento

### Antes do Lançamento

- [ ] Todos os testes passam
- [ ] Build funciona sem erros
- [ ] Documentação completa
- [ ] Versão atualizada para 1.0.0
- [ ] Changelog atualizado
- [ ] README atualizado

### Durante o Lançamento

- [ ] Build final executado
- [ ] Publicado no NPM
- [ ] Storybook publicado no Chromatic
- [ ] Tags Git criadas e pushadas
- [ ] Release notes criadas

### Após o Lançamento

- [ ] Verificação de instalação
- [ ] Verificação de Storybook online
- [ ] Anúncio da versão
- [ ] Monitoramento de feedback

---

## 🎯 Próximos Passos Imediatos

1. **Esta Semana:**
   - [ ] Completar testes manuais de todos os componentes
   - [ ] Resolver qualquer bug encontrado
   - [ ] Revisar e atualizar documentação

2. **Próxima Semana:**
   - [ ] Configurar CI/CD
   - [ ] Testar publicação no Chromatic
   - [ ] Preparar para v1.0.0

3. **Antes do Lançamento:**
   - [ ] Revisão final de código
   - [ ] Testes de instalação
   - [ ] Publicação de v1.0.0

---

**Última Atualização:** 2026-01-23  
**Versão do Roadmap:** 1.0.0
