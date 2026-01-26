# Gov.br React UI

[![npm version](https://img.shields.io/npm/v/gov-br-react-ui.svg)](https://www.npmjs.com/package/gov-br-react-ui)
[![npm downloads](https://img.shields.io/npm/dm/gov-br-react-ui.svg)](https://www.npmjs.com/package/gov-br-react-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Biblioteca de componentes ReactJS construída seguindo o padrão digital do [Design System do Governo Federal](https://www.gov.br/ds/home).

Nosso objetivo é fornecer uma coleção de componentes e interfaces UI de alta qualidade e acessíveis, que possam ser facilmente integrados em aplicações React.

## Características

- **ReactJS + Vite**: Utilizamos a moderna ferramenta de construção Vite para um desenvolvimento mais rápido e eficiente.
- **TypeScript**: Garantimos a segurança de tipos com TypeScript, melhorando a manutenção e a escalabilidade do código.
- **TailwindCSS**: Aproveitamos a utilidade do TailwindCSS para um design responsivo e personalizável.
- **Storybook**: Documentamos nossos componentes com Storybook, permitindo uma visualização interativa e um teste fácil dos componentes.

## Objetivos

Nosso principal objetivo é criar uma biblioteca de componentes que:

- Seja consistente com o Design System do Governo Federal.
- Promova a reutilização de código.
- Aumente a eficiência do desenvolvimento de interfaces.

## Instalação

Para instalar a biblioteca em seu projeto:

```bash
npm install gov-br-react-ui
```

ou com yarn:

```bash
yarn add gov-br-react-ui
```

ou com pnpm:

```bash
pnpm add gov-br-react-ui
```

## Uso Básico

```tsx
import { Button } from 'gov-br-react-ui';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicado!')}>
      Clique aqui
    </Button>
  );
}
```

## Componentes Disponíveis

A biblioteca inclui os seguintes componentes:

- **Alert** - Componente de alerta
- **Avatar** - Avatar de usuário
- **Button** - Botão
- **Card** - Card com header, content e footer
- **Checkbox** - Checkbox e grupo de checkboxes
- **DataTable** - Tabela de dados
- **DateTimePicker** - Seletor de data e hora
- **Divider** - Divisor visual
- **Header** - Cabeçalho de aplicação
- **Input** - Campo de entrada de texto
- **Item** - Item de lista ou menu
- **List** - Lista com itens expansíveis
- **Loading** - Indicador de carregamento
- **Magicbutton** - Botão mágico
- **Menu** - Menu lateral (offcanvas/push)
- **Message** - Mensagem de feedback
- **Modal** - Modal/dialog
- **Pagination** - Paginação
- **Persona** - Perfil de usuário
- **Radio** - Radio button e grupo
- **Select** - Campo de seleção
- **Step** - Indicador de etapas
- **Switch** - Interruptor
- **Tab** - Abas
- **Tag** - Tag, TagStatus, TagCount, TagSelection
- **Textarea** - Campo de texto multilinha
- **Upload** - Upload de arquivos

## Desenvolvimento

Para contribuir ou desenvolver localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/atejap05/gov-br-react-ui
   cd gov-br-react-ui
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o Storybook para visualizar os componentes:

   ```bash
   npm run storybook
   ```

## Documentação

A documentação completa e exemplos de uso estão disponíveis no Storybook:

🔗 **[Visualizar Storybook Online](https://main--660d686fca703150f4bd09bd.chromatic.com)**

Para visualizar localmente:

```bash
npm run storybook
```

## Contribuindo

Estamos sempre procurando contribuições para melhorar nossa biblioteca. Se você está interessado em contribuir, por favor, leia nosso `CONTRIBUTING.md` para mais informações sobre como começar.

## Licença

Este projeto é licenciado sob a Licença MIT.
