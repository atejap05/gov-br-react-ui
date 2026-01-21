# Componentes Disponíveis

Este documento lista todos os componentes disponíveis na biblioteca Gov-BR React UI.

## 📦 Catálogo Completo

A biblioteca inclui mais de 25 componentes prontos para uso, organizados por categoria.

## 🎨 Inputs e Formulários

### Button

Botão seguindo o padrão Gov.br.

**Props principais:**
- `variant`: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "info"
- `size`: "xs" | "sm" | "md" | "lg"
- `disabled`: boolean
- `loading`: boolean
- `block`: boolean
- `circle`: boolean
- `icon`: FontAwesome icon

**Storybook**: [Components/Button](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-button--default)

**Exemplo:**
```tsx
import { Button } from 'gov-br-react-ui';

<Button variant="primary" size="md">Clique aqui</Button>
<Button variant="danger" loading>Carregando...</Button>
```

### Input

Campo de entrada de texto.

**Props principais:**
- `label`: string
- `type`: "text" | "email" | "password" | etc.
- `size`: "sm" | "md" | "lg"
- `status`: "danger" | "warning" | "info" | "success"
- `disabled`: boolean
- `feedback`: string
- `icon`: FontAwesome icon
- `onSearch`: (value: string) => void

**Storybook**: [Components/Input](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-input--default)

**Exemplo:**
```tsx
import { Input } from 'gov-br-react-ui';

<Input label="Nome" placeholder="Digite seu nome" />
<Input label="Email" type="email" status="success" />
```

### Checkbox

Caixa de seleção.

**Props principais:**
- `checked`: boolean
- `disabled`: boolean
- `label`: string
- `indeterminate`: boolean

**Componentes relacionados:**
- `CheckboxGroup`: Grupo de checkboxes

**Storybook**: [Components/Checkbox](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-checkbox--default)

**Exemplo:**
```tsx
import { Checkbox, CheckboxGroup } from 'gov-br-react-ui';

<Checkbox label="Aceito os termos" />
<CheckboxGroup>
  <Checkbox label="Opção 1" />
  <Checkbox label="Opção 2" />
</CheckboxGroup>
```

### Radio

Botão de opção única.

**Props principais:**
- `checked`: boolean
- `disabled`: boolean
- `label`: string
- `value`: string

**Componentes relacionados:**
- `RadioGroup`: Grupo de radios

**Storybook**: [Components/Radio](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-radio--default)

**Exemplo:**
```tsx
import { RadioGroup, RadioItem } from 'gov-br-react-ui';

<RadioGroup>
  <RadioItem label="Opção 1" value="1" />
  <RadioItem label="Opção 2" value="2" />
</RadioGroup>
```

### Select

Dropdown de seleção.

**Props principais:**
- `label`: string
- `options`: Array<{ value: string; label: string }>
- `disabled`: boolean
- `placeholder`: string

**Storybook**: [Components/Select](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-select--default)

**Exemplo:**
```tsx
import { Select } from 'gov-br-react-ui';

<Select
  label="Estado"
  options={[
    { value: "sp", label: "São Paulo" },
    { value: "rj", label: "Rio de Janeiro" },
  ]}
/>
```

### Switch

Interruptor on/off.

**Props principais:**
- `checked`: boolean
- `disabled`: boolean
- `label`: string

**Storybook**: [Components/Switch](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-switch--default)

**Exemplo:**
```tsx
import { Switch } from 'gov-br-react-ui';

<Switch label="Notificações" checked={enabled} />
```

### Textarea

Área de texto multilinha.

**Props principais:**
- `label`: string
- `rows`: number
- `disabled`: boolean
- `maxLength`: number

**Storybook**: [Components/Textarea](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-textarea--default)

**Exemplo:**
```tsx
import { Textarea } from 'gov-br-react-ui';

<Textarea label="Mensagem" rows={5} />
```

### DateTimePicker

Seletor de data e hora.

**Props principais:**
- `label`: string
- `dateFormat`: string
- `timeFormat`: string
- `disabled`: boolean
- `minDate`: Date
- `maxDate`: Date

**Storybook**: [Components/DateTimePicker](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-datetimepicker--default)

**Exemplo:**
```tsx
import { DateTimePicker } from 'gov-br-react-ui';

<DateTimePicker label="Data de nascimento" />
```

### Upload

Upload de arquivos com drag & drop.

**Props principais:**
- `onUpload`: (files: File[]) => void
- `accept`: string
- `multiple`: boolean
- `maxSize`: number

**Componentes relacionados:**
- `UploadItem`: Item de arquivo individual

**Storybook**: [Components/Upload](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-upload--default)

**Exemplo:**
```tsx
import { Upload } from 'gov-br-react-ui';

<Upload
  onUpload={(files) => console.log(files)}
  accept="image/*"
  multiple
/>
```

## 📄 Exibição

### Alert

Alerta de notificação.

**Props principais:**
- `type`: "success" | "info" | "warning" | "danger"
- `title`: string
- `dismissible`: boolean

**Storybook**: [Components/Alert](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-alert--default)

**Exemplo:**
```tsx
import { Alert } from 'gov-br-react-ui';

<Alert type="success" title="Sucesso!" dismissible>
  Operação concluída com sucesso.
</Alert>
```

### Card

Card para agrupar conteúdo.

**Props principais:**
- `disabled`: boolean
- `hover`: boolean
- `fixed`: boolean

**Componentes relacionados:**
- `CardHeader`: Cabeçalho do card
- `CardContent`: Conteúdo do card
- `CardFooter`: Rodapé do card

**Storybook**: [Components/Card](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-card--default)

**Exemplo:**
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

### Avatar

Avatar de usuário.

**Props principais:**
- `src`: string (URL da imagem)
- `alt`: string
- `size`: "sm" | "md" | "lg"
- `initials`: string

**Storybook**: [Components/Avatar](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-avatar--default)

**Exemplo:**
```tsx
import { Avatar } from 'gov-br-react-ui';

<Avatar src="/user.jpg" alt="Usuário" size="md" />
<Avatar initials="JD" size="lg" />
```

### Tag

Tag/etiqueta para categorização.

**Props principais:**
- `variant`: "default" | "primary" | "success" | "warning" | "danger"
- `removable`: boolean

**Componentes relacionados:**
- `TagCount`: Tag com contador
- `TagStatus`: Tag de status
- `TagSelection`: Tag selecionável

**Storybook**: [Components/Tag](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-tag--default)

**Exemplo:**
```tsx
import { Tag } from 'gov-br-react-ui';

<Tag variant="primary">React</Tag>
<Tag variant="success" removable>Ativo</Tag>
```

### Message

Mensagem de feedback.

**Props principais:**
- `type`: "success" | "info" | "warning" | "danger"
- `title`: string
- `dismissible`: boolean

**Storybook**: [Components/Message](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-message--default)

**Exemplo:**
```tsx
import { Message } from 'gov-br-react-ui';

<Message type="info" title="Informação">
  Esta é uma mensagem informativa.
</Message>
```

### Loading

Indicador de carregamento.

**Props principais:**
- `size`: "sm" | "md" | "lg"
- `text`: string

**Storybook**: [Components/Loading](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-loading--default)

**Exemplo:**
```tsx
import { Loading } from 'gov-br-react-ui';

<Loading size="md" text="Carregando..." />
```

### Divider

Separador visual.

**Props principais:**
- `vertical`: boolean
- `spacing`: "sm" | "md" | "lg"

**Storybook**: [Components/Divider](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-divider--default)

**Exemplo:**
```tsx
import { Divider } from 'gov-br-react-ui';

<Divider />
<Divider vertical spacing="md" />
```

### Persona

Representação visual de pessoa/entidade.

**Props principais:**
- `name`: string
- `image`: string
- `role`: string

**Storybook**: [Components/Persona](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-persona--default)

**Exemplo:**
```tsx
import { Persona } from 'gov-br-react-ui';

<Persona
  name="João Silva"
  image="/avatar.jpg"
  role="Desenvolvedor"
/>
```

## 🧭 Navegação

### Header

Cabeçalho do site.

**Props principais:**
- `title`: string
- `subtitle`: string

**Componentes relacionados:**
- `HeaderLogo`: Logo do header
- `HeaderLinks`: Links de navegação

**Storybook**: [Components/Header](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-header--default)

**Exemplo:**
```tsx
import { Header, HeaderLogo, HeaderLinks } from 'gov-br-react-ui';

<Header>
  <HeaderLogo />
  <HeaderLinks>
    <a href="/">Home</a>
    <a href="/sobre">Sobre</a>
  </HeaderLinks>
</Header>
```

### Menu

Menu de navegação.

**Props principais:**
- `items`: Array<MenuItem>

**Componentes relacionados:**
- `MenuHeader`: Cabeçalho do menu
- `MenuBody`: Corpo do menu
- `MenuFooter`: Rodapé do menu

**Storybook**: [Components/Menu](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-menu--default)

### Tab

Abas de navegação.

**Props principais:**
- `items`: Array<{ label: string; content: ReactNode }>
- `defaultActive`: number

**Storybook**: [Components/Tab](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-tab--default)

**Exemplo:**
```tsx
import { Tab } from 'gov-br-react-ui';

<Tab
  items={[
    { label: "Aba 1", content: <div>Conteúdo 1</div> },
    { label: "Aba 2", content: <div>Conteúdo 2</div> },
  ]}
/>
```

### Pagination

Paginação de listas.

**Props principais:**
- `currentPage`: number
- `totalPages`: number
- `onPageChange`: (page: number) => void

**Componentes relacionados:**
- `PaginationContent`: Conteúdo da paginação
- `PaginationItem`: Item de página
- `PaginationPrevious`: Botão anterior
- `PaginationNext`: Botão próximo

**Storybook**: [Components/Pagination](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-pagination--default)

**Exemplo:**
```tsx
import { Pagination } from 'gov-br-react-ui';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>
```

### Step

Indicador de etapas.

**Props principais:**
- `steps`: Array<{ label: string; completed?: boolean }>
- `currentStep`: number

**Storybook**: [Components/Step](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-step--default)

**Exemplo:**
```tsx
import { Step } from 'gov-br-react-ui';

<Step
  steps={[
    { label: "Etapa 1", completed: true },
    { label: "Etapa 2", completed: false },
    { label: "Etapa 3" },
  ]}
  currentStep={2}
/>
```

## 📊 Dados

### DataTable

Tabela de dados avançada.

**Props principais:**
- `columns`: Array<Column>
- `rows`: Array<Row>
- `title`: string
- `density`: "small" | "medium" | "large"
- `actions`: Array<Action>
- `pageSizeOptions`: number[]

**Storybook**: [Components/DataTable](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-datatable--default)

**Exemplo:**
```tsx
import { DataTable } from 'gov-br-react-ui';

<DataTable
  columns={[
    { key: "name", label: "Nome" },
    { key: "email", label: "Email" },
  ]}
  rows={[
    { name: "João", email: "joao@example.com" },
    { name: "Maria", email: "maria@example.com" },
  ]}
/>
```

### List

Lista de itens.

**Props principais:**
- `items`: Array<ListItem>
- `density`: "small" | "medium" | "large"

**Componentes relacionados:**
- `ListItem`: Item da lista
- `ListItemIcon`: Ícone do item
- `ListItemText`: Texto do item
- `ListExpandable`: Lista expansível
- `ListItemCheckbox`: Item com checkbox

**Storybook**: [Components/List](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-list--default)

**Exemplo:**
```tsx
import { List, ListItem, ListItemText } from 'gov-br-react-ui';

<List>
  <ListItem>
    <ListItemText primary="Item 1" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Item 2" />
  </ListItem>
</List>
```

## 🎭 Overlay

### Modal

Modal/dialog.

**Props principais:**
- `open`: boolean
- `onClose`: () => void
- `title`: string
- `size`: "sm" | "md" | "lg"

**Componentes relacionados:**
- `ModalHeader`: Cabeçalho do modal
- `ModalBody`: Corpo do modal
- `ModalFooter`: Rodapé do modal

**Storybook**: [Components/Modal](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-modal--default)

**Exemplo:**
```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'gov-br-react-ui';

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>
    <h3>Título</h3>
  </ModalHeader>
  <ModalBody>
    Conteúdo do modal
  </ModalBody>
  <ModalFooter>
    <Button onClick={() => setIsOpen(false)}>Fechar</Button>
  </ModalFooter>
</Modal>
```

## 🛠️ Utilitários

### Item

Item genérico para listas e menus.

**Props principais:**
- `children`: ReactNode
- `active`: boolean
- `disabled`: boolean

**Componentes relacionados:**
- `ItemButton`: Item como botão
- `ItemLink`: Item como link

**Storybook**: [Components/Item](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-item--default)

### Magicbutton

Botão mágico (floating action button).

**Props principais:**
- `icon`: FontAwesome icon
- `position`: "bottom-right" | "bottom-left" | etc.

**Storybook**: [Components/Magicbutton](https://main--660d686fca703150f4bd09bd.chromatic.com/?path=/story/components-magicbutton--default)

## 📚 Recursos

- **[Storybook Online](https://main--660d686fca703150f4bd09bd.chromatic.com)** - Veja todos os componentes em ação
- **[Design System Gov.br](https://www.gov.br/ds/components/visao-geral)** - Documentação oficial

## 🔄 Próximos Passos

- **[03. Uso em Projetos](./03-USO-EM-PROJETOS.md)** - Aprenda a usar os componentes
- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Crie novos componentes
- **[12. FAQ](./12-FAQ.md)** - Resolva dúvidas

---

**Precisa de ajuda com um componente específico?** Consulte o Storybook ou o [FAQ](./12-FAQ.md).
