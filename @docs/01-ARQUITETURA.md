# Arquitetura do Projeto

Este documento descreve a arquitetura técnica, stack tecnológica e estrutura organizacional do projeto Gov-BR React UI.

## 📚 Stack Tecnológica

### Core

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.2.2** - Superset do JavaScript com tipagem estática
- **Vite 5.2.0** - Bundler moderno e rápido (substituindo Webpack)

### Build e Ferramentas

- **@vitejs/plugin-react-swc** - Plugin Vite com compilador SWC para React
- **vite-plugin-dts** - Geração automática de arquivos de declaração TypeScript (.d.ts)
- **vite-plugin-css-injected-by-js** - Injeção automática de CSS no bundle JavaScript
- **vite-tsconfig-paths** - Suporte para path aliases do TypeScript

### Documentação e Testes

- **Storybook 8.6.15** - Ferramenta para documentação e testes de componentes
- **@chromatic-com/storybook** - Integração com Chromatic para visual testing
- **ESLint** - Linter para qualidade de código

### Estilização

- **SCSS** - Pré-processador CSS para organização de estilos
- **@govbr-ds/core@3.5.1** - Design System oficial do Governo Federal
- **class-variance-authority (CVA)** - Gerenciamento de variantes de componentes
- **clsx** - Utilitário para construção de classes CSS condicionais

### Ícones

- **@fortawesome/react-fontawesome** - Biblioteca de ícones FontAwesome para React
- **@fortawesome/fontawesome-svg-core** - Core do FontAwesome
- **@fortawesome/free-solid-svg-icons** - Ícones sólidos
- **@fortawesome/free-regular-svg-icons** - Ícones regulares
- **@fortawesome/free-brands-svg-icons** - Ícones de marcas

### Utilitários

- **nanoid** - Geração de IDs únicos
- **react-dropzone** - Upload de arquivos com drag & drop
- **react-flatpickr** - Seletor de data/hora

## 📁 Estrutura de Pastas

```
gov-br-react-ui/
├── .storybook/              # Configuração do Storybook
│   ├── main.ts             # Configuração principal
│   └── preview.ts          # Configuração de preview
├── src/
│   ├── components/         # Componentes da biblioteca
│   │   ├── Alert/
│   │   ├── Avatar/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── DataTable/
│   │   ├── DateTimePicker/
│   │   ├── Divider/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── Item/
│   │   ├── List/
│   │   ├── Loading/
│   │   ├── Magicbutton/
│   │   ├── Menu/
│   │   ├── Message/
│   │   ├── Modal/
│   │   ├── Pagination/
│   │   ├── Persona/
│   │   ├── Radio/
│   │   ├── Select/
│   │   ├── Step/
│   │   ├── Switch/
│   │   ├── Tab/
│   │   ├── Tag/
│   │   ├── Textarea/
│   │   ├── Upload/
│   │   └── index.ts        # Exportação centralizada
│   ├── hooks/              # Custom hooks React
│   ├── layouts/           # Componentes de layout
│   ├── stories/            # Stories do Storybook
│   │   ├── components/    # Stories por componente
│   │   └── exemplos/       # Exemplos de uso
│   ├── styles/             # Arquivos SCSS
│   │   ├── _alert.scss
│   │   ├── _avatar.scss
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   ├── _checkbox.scss
│   │   ├── _datetimepicker.scss
│   │   ├── _divider.scss
│   │   ├── _header.scss
│   │   ├── _index.scss     # Ponto de entrada dos estilos
│   │   ├── _input.scss
│   │   ├── _item.scss
│   │   ├── _list.scss
│   │   ├── _loading.scss
│   │   ├── _magicbutton.scss
│   │   ├── _menu.scss
│   │   ├── _message.scss
│   │   ├── _modal.scss
│   │   ├── _pagination.scss
│   │   ├── _persona.scss
│   │   ├── _radio.scss
│   │   ├── _select.scss
│   │   ├── _step.scss
│   │   ├── _switch.scss
│   │   ├── _tab.scss
│   │   ├── _table.scss
│   │   ├── _tag.scss
│   │   ├── _textarea.scss
│   │   └── _upload.scss
│   ├── index.ts            # Exportação principal da biblioteca
│   ├── style.css           # CSS compilado
│   └── style.scss          # Ponto de entrada dos estilos SCSS
├── dist/                   # Build de produção (gerado)
├── storybook-static/       # Build estático do Storybook
├── .eslintrc.cjs          # Configuração ESLint
├── chromatic.config.json  # Configuração Chromatic
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── tsconfig.node.json     # Configuração TypeScript para Node
└── vite.config.ts         # Configuração Vite
```

## 🏗️ Padrão de Design

O projeto segue rigorosamente o **Design System do Governo Federal** disponível em:

- [Componentes](https://www.gov.br/ds/components/visao-geral)
- [Padrões](https://www.gov.br/ds/padroes/visao-geral)

### Dependência Principal

```json
"@govbr-ds/core": "^3.5.1"
```

Esta dependência fornece:
- Classes CSS base do Design System
- Tokens de design (cores, espaçamentos, tipografia)
- Variáveis CSS customizadas
- Mixins SCSS

### Convenções de Nomenclatura

- **Classes CSS**: Prefixo `br-` (ex: `br-button`, `br-input`)
- **Componentes**: PascalCase (ex: `Button`, `DataTable`)
- **Arquivos**: PascalCase para componentes, camelCase para utilitários
- **Variantes**: Seguem o padrão do Design System (primary, secondary, etc.)

## 🔄 Fluxo de Build

O processo de build segue estas etapas:

```mermaid
flowchart LR
    srcFiles[Arquivos TypeScript/React] --> tsc[TypeScript Compiler]
    srcFiles --> vite[Vite Build]
    tsc --> types[index.d.ts]
    vite --> esm[index.es.js]
    vite --> umd[index.umd.js]
    scss[Arquivos SCSS] --> cssPlugin[vite-plugin-css-injected-by-js]
    cssPlugin --> esm
    cssPlugin --> umd
    types --> dist[/dist folder]
    esm --> dist
    umd --> dist
```

### Etapas Detalhadas

1. **Compilação TypeScript** (`tsc`)
   - Validação de tipos
   - Geração de arquivos `.d.ts`

2. **Build Vite**
   - Transpilação de TypeScript/JSX
   - Bundling com Rollup
   - Geração de formatos ES Module e UMD
   - Injeção de CSS no JavaScript

3. **Saídas Geradas**
   - `dist/index.es.js` - Formato ES Module
   - `dist/index.umd.js` - Formato UMD (Universal Module Definition)
   - `dist/index.d.ts` - Declarações TypeScript

### Configuração do Build

O arquivo `vite.config.ts` define:

- **Entry point**: `src/index.ts`
- **Formatos**: ES Module + UMD
- **Externals**: React e React-DOM (não incluídos no bundle)
- **Source maps**: Habilitados para debugging
- **CSS injection**: Automático via plugin

## 📦 Estrutura de um Componente

Cada componente segue uma estrutura padronizada:

```mermaid
flowchart TD
    Component[Componente React] --> tsx[ComponentName.tsx]
    Component --> index[index.ts]
    Component --> story[ComponentName.stories.tsx]
    Component --> style[_componentname.scss]
    
    tsx --> props[TypeScript Props]
    tsx --> cva[Class Variance Authority]
    tsx --> forwardRef[React.forwardRef]
    
    style --> indexScss[styles/_index.scss]
    indexScss --> mainCss[style.scss]
    
    story --> storybook[Storybook Documentation]
```

### Exemplo: Estrutura do Componente Button

```
Button/
├── Button.tsx      # Implementação do componente
└── index.ts        # Exportação
```

**Button.tsx** contém:
- Definição de variantes com CVA
- Props TypeScript tipadas
- Implementação com `React.forwardRef`
- Integração com FontAwesome para ícones

**styles/_button.scss** contém:
- Estilos específicos do componente
- Classes seguindo padrão `br-button.*`
- Estados e variantes

## 🔌 Integração com Dependências Externas

### React e React-DOM

São tratadas como **peer dependencies** (externals no build):
- Não são incluídas no bundle final
- Devem ser fornecidas pelo projeto consumidor
- Reduz o tamanho da biblioteca

### @govbr-ds/core

- Fornece estilos base e tokens
- Importado via SCSS: `@import "../../node_modules/@govbr-ds/core/src/partial/scss/core-base.scss"`
- Classes CSS disponíveis globalmente

### FontAwesome

- Ícones disponíveis via `@fortawesome/react-fontawesome`
- Suporte a ícones sólidos, regulares e de marcas
- Integração direta nos componentes

## 🎯 Decisões Arquiteturais

### Por que Vite?

- **Performance**: Build extremamente rápido
- **HMR**: Hot Module Replacement instantâneo
- **Moderno**: Suporte nativo a ES Modules
- **Simples**: Configuração mínima necessária

### Por que CVA (Class Variance Authority)?

- **Type-safe**: Variantes tipadas em TypeScript
- **Composável**: Fácil combinação de variantes
- **Manutenível**: Centraliza lógica de classes CSS
- **Consistente**: Padrão único para todos os componentes

### Por que SCSS?

- **Organização**: Modularização de estilos
- **Compatibilidade**: Integração com @govbr-ds/core
- **Manutenibilidade**: Variáveis e mixins reutilizáveis
- **Padrão**: Alinhado com o Design System oficial

## 📊 Métricas e Performance

### Tamanho do Bundle

- **ES Module**: ~XXX KB (gzipped)
- **UMD**: ~XXX KB (gzipped)
- **CSS**: Injetado automaticamente no JS

### Compatibilidade

- **React**: 18.2.0+
- **TypeScript**: 5.2.2+
- **Node.js**: 18+
- **Navegadores**: Suporta navegadores modernos (ES2020+)

## 🔍 Próximos Passos

Para entender como desenvolver componentes nesta arquitetura, consulte:

- [04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)
- [05. Estilização](./05-ESTILOS.md)
- [07. Build e Publicação](./07-BUILD-PUBLICACAO.md)
