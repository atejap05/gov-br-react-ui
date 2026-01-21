# Build e Publicação

Este guia explica o processo de build da biblioteca e como publicá-la no NPM.

## 🔨 Configuração do Build

### Arquivo de Configuração: `vite.config.ts`

O build é configurado no arquivo [`vite.config.ts`](../vite.config.ts):

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "gov-br-react-ui",
      formats: ["es", "umd"],
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    cssInjectedByJsPlugin()
  ],
});
```

### Configurações Principais

#### Entry Point

```typescript
entry: path.resolve(__dirname, "./src/index.ts")
```

Ponto de entrada da biblioteca. Todos os exports devem estar em `src/index.ts`.

#### Formatos de Saída

```typescript
formats: ["es", "umd"]
```

- **ES Module** (`index.es.js`): Para bundlers modernos (Vite, Webpack 5+)
- **UMD** (`index.umd.js`): Para uso direto no browser ou bundlers antigos

#### Dependências Externas

```typescript
external: ["react", "react-dom"]
```

React e React-DOM não são incluídos no bundle. Devem ser fornecidos pelo projeto consumidor.

#### Plugins

- **`react()`**: Compilação React com SWC
- **`dts()`**: Geração de arquivos `.d.ts` TypeScript
- **`cssInjectedByJsPlugin()`**: Injeção automática de CSS no JavaScript

## 🏗️ Processo de Build

### Comando

```bash
npm run build
```

### O que Acontece

1. **Compilação TypeScript**
   - Validação de tipos
   - Geração de `.d.ts` (declarações TypeScript)

2. **Build Vite**
   - Transpilação de TypeScript/JSX
   - Bundling com Rollup
   - Geração de formatos ES e UMD
   - Injeção de CSS no JavaScript
   - Geração de source maps

3. **Saídas Geradas**

```
dist/
├── index.es.js          # ES Module
├── index.es.js.map      # Source map ES
├── index.umd.js         # UMD
├── index.umd.js.map     # Source map UMD
└── index.d.ts           # Declarações TypeScript
```

### Verificar Build

Após o build, verifique:

```bash
# Verificar se dist/ foi criado
ls dist/

# Verificar tamanho dos arquivos
du -sh dist/*
```

## 📦 Configuração do Package.json

### Campos Importantes

```json
{
  "name": "gov-br-react-ui",
  "version": "0.0.8-beta",
  "type": "module",
  "main": "dist/index.umd.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": [
    "/dist"
  ],
  "publishConfig": {
    "access": "public"
  }
}
```

### Explicação dos Campos

- **`main`**: Ponto de entrada para CommonJS/UMD
- **`module`**: Ponto de entrada para ES Modules
- **`types`**: Arquivo de declarações TypeScript
- **`exports`**: Mapeamento moderno de exports
- **`files`**: Arquivos incluídos no pacote NPM (apenas `/dist`)
- **`publishConfig.access`**: Acesso público no NPM

## 🚀 Publicação no NPM

### Pré-requisitos

1. **Conta NPM**
   - Criar em [npmjs.com](https://www.npmjs.com/)
   - Fazer login: `npm login`

2. **Nome do Pacote**
   - Verificar disponibilidade: `npm view gov-br-react-ui`
   - Se já existir, use um scoped package: `@seu-usuario/gov-br-react-ui`

### Checklist Antes de Publicar

- [ ] Build funciona (`npm run build`)
- [ ] Testes passam (se houver)
- [ ] Linter passa (`npm run lint`)
- [ ] Versão atualizada em `package.json`
- [ ] README.md atualizado
- [ ] Changelog atualizado (se houver)
- [ ] Git commitado e tag criada

### Processo de Publicação

#### 1. Atualizar Versão

Siga [Versionamento Semântico](#versionamento-semântico):

```bash
# Patch (0.0.8-beta → 0.0.9-beta)
npm version patch

# Minor (0.0.8-beta → 0.1.0-beta)
npm version minor

# Major (0.0.8-beta → 1.0.0)
npm version major
```

Ou edite manualmente `package.json`:

```json
{
  "version": "0.0.9-beta"
}
```

#### 2. Build

```bash
npm run build
```

#### 3. Verificar Conteúdo

```bash
# Ver o que será publicado
npm pack --dry-run
```

#### 4. Publicar

```bash
# Publicar
npm publish

# Ou para pacote público (se necessário)
npm publish --access public
```

#### 5. Criar Tag Git

```bash
git tag v0.0.9-beta
git push origin v0.0.9-beta
```

### Publicação Beta/Pré-release

Para versões beta:

```bash
npm publish --tag beta
```

Usuários instalam com:
```bash
npm install gov-br-react-ui@beta
```

## 📊 Versionamento Semântico

Siga [Semantic Versioning](https://semver.org/):

### Formato

`MAJOR.MINOR.PATCH`

- **MAJOR**: Mudanças incompatíveis (breaking changes)
- **MINOR**: Novas funcionalidades compatíveis
- **PATCH**: Correções de bugs compatíveis

### Exemplos

- `0.0.8-beta` → `0.0.9-beta`: Correção de bug
- `0.0.8-beta` → `0.1.0-beta`: Novo componente
- `0.0.8-beta` → `1.0.0`: Primeira versão estável
- `1.0.0` → `2.0.0`: Breaking change

### Pré-releases

- `-beta`: Versão beta
- `-alpha`: Versão alpha
- `-rc`: Release candidate

## 🔍 Verificar Publicação

### Verificar no NPM

```bash
npm view gov-br-react-ui
```

### Instalar Versão Publicada

```bash
npm install gov-br-react-ui@0.0.8-beta
```

## 🐛 Troubleshooting

### Erro: "Package name already exists"

**Solução**: Use um nome diferente ou scoped package:
```json
{
  "name": "@seu-usuario/gov-br-react-ui"
}
```

### Erro: "You must verify your email"

**Solução**: Verifique seu email no npmjs.com

### Erro: "403 Forbidden"

**Solução**: 
- Verifique se está logado: `npm whoami`
- Verifique permissões do pacote

### Build muito grande

**Solução**:
- Verifique se `react` e `react-dom` estão em `external`
- Otimize imports (tree-shaking)
- Verifique se CSS não está duplicado

### TypeScript errors no build

**Solução**:
```bash
# Limpar e reinstalar
rm -rf node_modules dist
npm install
npm run build
```

## 📝 Checklist de Publicação

Antes de cada publicação:

- [ ] Código testado e funcionando
- [ ] Build sem erros
- [ ] Versão atualizada
- [ ] README atualizado
- [ ] Changelog atualizado
- [ ] Git commitado
- [ ] Tag Git criada
- [ ] Publicado no NPM
- [ ] Verificado instalação

## 🔄 Atualização Contínua

### Workflow Recomendado

1. **Desenvolvimento**
   ```bash
   npm run dev  # ou npm run storybook
   ```

2. **Testes**
   ```bash
   npm run lint
   npm run build
   ```

3. **Commit**
   ```bash
   git add .
   git commit -m "feat: nova feature"
   ```

4. **Versionamento**
   ```bash
   npm version patch
   ```

5. **Build e Publicação**
   ```bash
   npm run build
   npm publish
   git push --tags
   ```

## 📚 Recursos

- **[NPM Documentation](https://docs.npmjs.com/)**
- **[Semantic Versioning](https://semver.org/)**
- **[Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)**

## 🔄 Próximos Passos

- **[08. TypeScript](./08-TYPESCRIPT.md)** - Configurações TypeScript
- **[09. Qualidade de Código](./09-QUALIDADE.md)** - Linting e formatação
- **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Padrões do projeto
- **[13. Publicação de Versões](./13-PUBLICACAO-VERSOES.md)** - Guia detalhado para publicar versões e Storybook

---

**Dúvidas sobre build ou publicação?** Consulte o [FAQ](./12-FAQ.md) ou veja o guia completo em **[13. Publicação de Versões](./13-PUBLICACAO-VERSOES.md)**.
