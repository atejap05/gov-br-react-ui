# Documentação Técnica - Gov-BR React UI

Bem-vindo à documentação técnica completa da biblioteca **Gov-BR React UI**, uma coleção de componentes React baseados no [Design System do Governo Federal](https://www.gov.br/ds/home).

## 📚 Índice da Documentação

Esta documentação está organizada em guias específicos para diferentes aspectos do projeto:

### 🏗️ Fundamentos

- **[01. Arquitetura](./01-ARQUITETURA.md)** - Stack tecnológica, estrutura de pastas e fluxo de build
- **[02. Setup Inicial](./02-SETUP.md)** - Como configurar o ambiente de desenvolvimento
- **[03. Uso em Projetos](./03-USO-EM-PROJETOS.md)** - Como integrar a biblioteca em projetos React

### 💻 Desenvolvimento

- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Guia completo para criar novos componentes
- **[05. Estilização](./05-ESTILOS.md)** - Sistema de estilos SCSS e integração com Gov.br DS
- **[06. Storybook](./06-STORYBOOK.md)** - Documentação e testes de componentes

### 🚀 Build e Qualidade

- **[07. Build e Publicação](./07-BUILD-PUBLICACAO.md)** - Processo de build e publicação no NPM
- **[08. TypeScript](./08-TYPESCRIPT.md)** - Configurações e padrões TypeScript
- **[09. Qualidade de Código](./09-QUALIDADE.md)** - Linting, formatação e padrões
- **[13. Publicação de Versões](./13-PUBLICACAO-VERSOES.md)** - Guia completo para publicar novas versões e Storybook

### 📖 Referências

- **[10. Boas Práticas](./10-BOAS-PRATICAS.md)** - Padrões e convenções do projeto
- **[11. Componentes Disponíveis](./11-COMPONENTES.md)** - Catálogo completo de componentes
- **[12. FAQ e Troubleshooting](./12-FAQ.md)** - Perguntas frequentes e soluções

## 🎯 Visão Geral do Projeto

**Gov-BR React UI** é uma biblioteca de componentes React que implementa o Design System do Governo Federal brasileiro. O projeto foi criado em 2024 utilizando tecnologias modernas:

- **React 18** com TypeScript
- **Vite** como bundler
- **Storybook** para documentação
- **SCSS** para estilização
- **Class Variance Authority (CVA)** para variantes de componentes

### Objetivos

- ✅ Fornecer componentes React reutilizáveis seguindo o padrão Gov.br
- ✅ Garantir acessibilidade (WCAG 2.1)
- ✅ Facilitar o desenvolvimento de interfaces governamentais
- ✅ Manter consistência visual com o Design System oficial

## 🚀 Início Rápido

### Para Desenvolvedores do Projeto

```bash
# Clone o repositório
git clone https://github.com/atejap05/gov-br-react-ui
cd gov-br-react-ui

# Instale as dependências
npm install

# Inicie o Storybook para ver os componentes
npm run storybook
```

### Para Usuários da Biblioteca

```bash
# Instale a biblioteca no seu projeto
npm install gov-br-react-ui

# Importe os componentes
import { Button, Input, Card } from 'gov-br-react-ui';
```

Veja o guia completo em [03. Uso em Projetos](./03-USO-EM-PROJETOS.md).

## 📦 Componentes Disponíveis

A biblioteca inclui mais de 25 componentes prontos para uso:

- **Inputs**: Button, Input, Checkbox, Radio, Select, Switch, Textarea, Upload, DateTimePicker
- **Exibição**: Alert, Avatar, Card, Divider, Message, Tag, Loading, Persona
- **Navegação**: Header, Menu, Tab, Pagination, Step
- **Dados**: DataTable, List
- **Overlay**: Modal
- **Utilitários**: Magicbutton, Item

Veja a lista completa em [11. Componentes Disponíveis](./11-COMPONENTES.md).

## 🔗 Links Úteis

- **Storybook Online**: [Visualizar Componentes](https://main--660d686fca703150f4bd09bd.chromatic.com)
- **Design System Gov.br**: [Documentação Oficial](https://www.gov.br/ds/home)
- **NPM Package**: [@govbr-ds/webcomponents-react](https://www.npmjs.com/package/@govbr-ds/webcomponents-react)
- **Repositório**: [GitHub](https://github.com/atejap05/gov-br-react-ui)

## 📝 Versão Atual

- **Versão**: `0.0.8-beta`
- **Última Atualização**: 2024

## 🤝 Contribuindo

Contribuições são bem-vindas! Consulte o guia de desenvolvimento em [04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md) para começar.

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.

---

**Dúvidas?** Consulte o [FAQ](./12-FAQ.md) ou abra uma issue no repositório.
