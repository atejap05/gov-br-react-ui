# Script para Atualizar Stories para Storybook 10

Este documento contém instruções para atualizar manualmente os stories restantes.

## Padrão a Aplicar

Para cada arquivo `.stories.tsx`, aplicar as seguintes mudanças:

### 1. Atualizar o import
```typescript
// Antes
import { Meta, StoryObj } from "@storybook/react-vite";

// Depois
import type { Meta, StoryObj } from "@storybook/react-vite";
```

### 2. Atualizar a declaração do meta
```typescript
// Antes
const meta: Meta<typeof Component> = {
  title: "...",
  component: Component,
  tags: ["autodocs"],
  // ...
};

// Depois
const meta = {
  title: "...",
  component: Component,
  tags: ["autodocs"],
  // ...
} satisfies Meta<typeof Component>;
```

### 3. Atualizar o tipo Story
```typescript
// Antes
type Story = StoryObj<typeof Component>;

// Depois
type Story = StoryObj<typeof meta>;
```

## Arquivos Pendentes de Atualização

### Components
- [ ] src/stories/components/Divider.stories.tsx
- [ ] src/stories/components/Modal.stories.tsx
- [ ] src/stories/components/Select.stories.tsx
- [ ] src/stories/components/Switch.stories.tsx
- [ ] src/stories/components/Tab.stories.tsx
- [ ] src/stories/components/Textarea.stories.tsx
- [ ] src/stories/components/Upload.stories.tsx
- [ ] src/stories/components/Message.stories.tsx
- [ ] src/stories/components/Magicbutton.stories.tsx
- [ ] src/stories/components/Step.stories.tsx
- [ ] src/stories/components/DateTimePicker.stories.tsx
- [ ] src/stories/components/Radio/RadioGroup.stories.tsx
- [ ] src/stories/components/Radio/RadioItem.stories.tsx
- [ ] src/stories/components/List/List.stories.tsx
- [ ] src/stories/components/List/ListExpandable.stories.tsx
- [ ] src/stories/components/Input/Input.stories.tsx
- [ ] src/stories/components/Input/InputFeedback.stories.tsx
- [ ] src/stories/components/Input/InputSize.stories.tsx
- [ ] src/stories/components/Input/InputStatus.stories.tsx

### Exemplos
- [ ] src/stories/exemplos/input.stories.tsx
- [ ] src/stories/exemplos/button.stories.tsx
- [ ] src/stories/exemplos/card.stories.tsx
- [ ] src/stories/exemplos/datatable.stories.tsx
- [ ] src/stories/exemplos/divider.stories.tsx
- [ ] src/stories/exemplos/avatar.stories.tsx
- [ ] src/stories/exemplos/List/list.stories.tsx
- [ ] src/stories/exemplos/List/listDensity.stories.tsx

## Comando de Busca e Substituição (VS Code)

### Buscar:
```regex
^import { Meta, StoryObj } from
```

### Substituir por:
```typescript
import type { Meta, StoryObj } from
```

### Buscar:
```regex
const meta: Meta<typeof (\w+)> = {
```

### Substituir por:
```typescript
const meta = {
```

### Adicionar no final do meta (antes de };):
```regex
};
```

### Substituir por:
```typescript
} satisfies Meta<typeof $1>;
```

### Buscar:
```regex
type Story = StoryObj<typeof (\w+)>;
```

### Substituir por:
```typescript
type Story = StoryObj<typeof meta>;
```

## Automatização (PowerShell)

Para usuários do Windows, um script PowerShell pode ser criado:

```powershell
# update-stories.ps1
$files = Get-ChildItem -Path "src/stories" -Filter "*.stories.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Atualizar import
    $content = $content -replace 'import \{ Meta, StoryObj \}', 'import type { Meta, StoryObj }'
    
    # Atualizar meta (básico - pode precisar ajuste manual)
    $content = $content -replace 'const meta: Meta<typeof (\w+)> = \{', 'const meta = {'
    
    # Salvar
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Atualizado: $($file.Name)"
}
```

**Nota:** Este script é básico e pode precisar de ajustes manuais após a execução.
