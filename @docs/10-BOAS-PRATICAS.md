# Boas Práticas

Este documento reúne as melhores práticas e convenções para desenvolvimento no projeto Gov-BR React UI.

## 🎯 Componentes

### Sempre Usar forwardRef

Permite acesso a refs do elemento DOM:

```typescript
// ✅ Bom
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button ref={ref} {...props} />;
  }
);

// ❌ Evitar
export const Button = (props: ButtonProps) => {
  return <button {...props} />;
};
```

### Props com Valores Padrão via CVA

Use `defaultVariants` do CVA ao invés de valores padrão nas props:

```typescript
// ✅ Bom
const variants = cva("br-button", {
  variants: {
    variant: { primary: "primary", secondary: "secondary" },
    size: { sm: "small", md: "medium" },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// ❌ Evitar
const Button = ({ variant = "primary", size = "md" }) => { };
```

### Destructuring e Spread de Props

```typescript
// ✅ Bom: Destructuring claro + spread
const Component = ({ variant, size, className, children, ...props }) => {
  return (
    <div className={variants({ variant, size, className })} {...props}>
      {children}
    </div>
  );
};

// ❌ Evitar: Props não espalhadas
const Component = (props) => {
  return <div className={variants(props)}>{props.children}</div>;
};
```

### Display Name

Sempre defina `displayName` para melhor debugging:

```typescript
export const Button = React.forwardRef(/* ... */);
Button.displayName = "Button";
```

### Props Tipadas

```typescript
// ✅ Bom: Estende HTMLAttributes
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

// ❌ Evitar: Props soltas
export type ButtonProps = {
  variant?: string;
  onClick?: () => void;
  // ... muitas props manuais
};
```

## ⚡ Performance

### React.memo Quando Necessário

Use `React.memo` para componentes que recebem props estáveis:

```typescript
// ✅ Bom: Componente pesado com props estáveis
export const ExpensiveComponent = React.memo<ComponentProps>(
  ({ data }) => {
    // Renderização custosa
  }
);

// ❌ Evitar: Componente simples que sempre re-renderiza
export const SimpleComponent = React.memo(({ text }) => {
  return <span>{text}</span>;
});
```

### Lazy Loading

Para componentes grandes ou raramente usados:

```typescript
// ✅ Bom: Lazy load de componente pesado
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <HeavyComponent />
    </React.Suspense>
  );
}
```

### Evitar Re-renders Desnecessários

```typescript
// ✅ Bom: Callback memoizado
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);

// ✅ Bom: Valores memoizados
const computedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

## ♿ Acessibilidade

### Atributos ARIA

```typescript
// ✅ Bom: ARIA labels e roles
<button
  aria-label="Fechar modal"
  aria-pressed={isPressed}
  role="button"
>
  Fechar
</button>

// ✅ Bom: Estados acessíveis
<div
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>
```

### Navegação por Teclado

```typescript
// ✅ Bom: Suporte a teclado
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    handleClick();
  }
};

<button onKeyDown={handleKeyDown} onClick={handleClick}>
  Ação
</button>
```

### Focus Visible

```scss
// ✅ Bom: Indicador de foco visível
.br-button:focus-visible {
  outline: 2px solid var(--blue-50);
  outline-offset: 2px;
}
```

### Contraste de Cores

Seguir WCAG 2.1:
- **AA**: Contraste mínimo 4.5:1 para texto normal
- **AAA**: Contraste mínimo 7:1 para texto normal

## 🎨 Estilização

### Usar Variáveis do Design System

```scss
// ✅ Bom: Variáveis do DS
.br-component {
  color: var(--blue-50);
  padding: var(--spacing-scale-base);
}

// ❌ Evitar: Valores hardcoded
.br-component {
  color: #2378c3;
  padding: 8px;
}
```

### Mobile First

```scss
// ✅ Bom: Mobile first
.br-component {
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
  
  @media (min-width: 1024px) {
    width: 33.333%;
  }
}
```

### Estados Consistentes

```scss
// ✅ Bom: Estados bem definidos
.br-component {
  &:hover:not(:disabled) { /* ... */ }
  &:focus { /* ... */ }
  &:active:not(:disabled) { /* ... */ }
  &:disabled { /* ... */ }
}
```

## 📝 TypeScript

### Evitar `any`

```typescript
// ✅ Bom: Tipos específicos
function process<T extends { value: unknown }>(data: T) {
  return data.value;
}

// ❌ Evitar: any
function process(data: any) {
  return data.value;
}
```

### Type Guards

```typescript
// ✅ Bom: Type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

if (isString(value)) {
  // TypeScript sabe que value é string
  console.log(value.toUpperCase());
}
```

### Const Assertions

```typescript
// ✅ Bom: Array readonly com const assertion
const variants = ["primary", "secondary"] as const;
type Variant = typeof variants[number]; // "primary" | "secondary"
```

## 🔄 Git

### Commits Descritivos

```bash
# ✅ Bom: Commit claro
git commit -m "feat: adiciona componente Button com variantes"

# ❌ Evitar: Commit vago
git commit -m "mudanças"
```

### Convenção de Commits

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

### Branches

```bash
# ✅ Bom: Nomes descritivos
feature/button-variants
bugfix/input-focus
hotfix/critical-bug

# ❌ Evitar: Nomes vagos
feature1
fix
test
```

### Pull Requests

- ✅ Descrição clara do que foi feito
- ✅ Lista de mudanças
- ✅ Screenshots (se aplicável)
- ✅ Referência a issues (se houver)
- ✅ Checklist de revisão

## 🧪 Testes

### Testar Componentes no Storybook

```typescript
// ✅ Bom: Story com interação
export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(button).toHaveTextContent("Clicked!");
  },
};
```

### Testar Estados

Criar stories para todos os estados:
- Default
- Hover
- Focus
- Disabled
- Loading
- Error

## 📚 Documentação

### Comentários Úteis

```typescript
/**
 * Componente Button
 * 
 * Implementa o botão do Design System Gov.br
 * 
 * @example
 * ```tsx
 * <Button variant="primary">Clique</Button>
 * ```
 */
export const Button = () => { };
```

### Stories Completas

- ✅ Todas as variantes documentadas
- ✅ Exemplos de uso
- ✅ Estados e interações
- ✅ Descrições claras

## 🔒 Segurança

### Validação de Inputs

```typescript
// ✅ Bom: Validar inputs
const handleSubmit = (value: string) => {
  if (!value || value.trim() === "") {
    return;
  }
  // Processar
};
```

### Sanitização

Para conteúdo HTML (se necessário):

```typescript
// ✅ Bom: Usar biblioteca de sanitização
import DOMPurify from "dompurify";

const sanitized = DOMPurify.sanitize(userInput);
```

## 🌐 Internacionalização (i18n)

### Preparar para i18n

```typescript
// ✅ Bom: Textos separados
const messages = {
  pt: { submit: "Enviar", cancel: "Cancelar" },
  en: { submit: "Submit", cancel: "Cancel" },
};

// ❌ Evitar: Textos hardcoded
<Button>Enviar</Button>
```

## ✅ Checklist Geral

Antes de considerar código pronto:

- [ ] Componente usa `forwardRef`
- [ ] Props tipadas corretamente
- [ ] Variantes usando CVA
- [ ] Acessibilidade (ARIA, keyboard)
- [ ] Performance otimizada
- [ ] Estilos seguem Design System
- [ ] TypeScript sem erros
- [ ] ESLint passa
- [ ] Storybook documentado
- [ ] Testado em navegadores
- [ ] Commit descritivo

## 📚 Recursos

- **[React Best Practices](https://react.dev/learn)**
- **[WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)**
- **[TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)**
- **[Conventional Commits](https://www.conventionalcommits.org/)**

## 🔄 Próximos Passos

- **[04. Desenvolvimento de Componentes](./04-DESENVOLVIMENTO.md)** - Aplique práticas ao desenvolver
- **[09. Qualidade de Código](./09-QUALIDADE.md)** - Mantenha qualidade
- **[12. FAQ](./12-FAQ.md)** - Resolva dúvidas

---

**Dúvidas sobre práticas?** Consulte o [FAQ](./12-FAQ.md) ou veja exemplos nos componentes existentes.
