import "../../style.css";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

//////// Checkbox Component ////////

const checboxVariants = cva("br-checkbox mt-0", {
  variants: {
    status: {
      valid: "valid",
      invalid: "invalid",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
    labeled: {
      true: "",
      false: "hidden-label",
    },
  },
});

/**
 * Props do componente Checkbox
 */
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Classe CSS adicional */
  className?: string;
  /** Label do checkbox */
  label?: string;
  /** ID único do checkbox */
  id: string;
  /** Nome do checkbox (para formulários) */
  name: string;
  /** Se o checkbox está em estado indeterminado */
  indeterminate?: boolean;
  /** Status de validação do checkbox */
  status?: "valid" | "invalid";
  /** Valor do checkbox */
  value?: string;
  /** Se o checkbox está desabilitado */
  disabled?: boolean;
  /** Se o label deve ser visível */
  labeled?: boolean;
  /** Valor inicial (modo não-controlado) */
  defaultChecked?: boolean;
  /** Callback chamado quando o valor muda */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Componente Checkbox do Design System Gov.br
 * 
 * Suporta modo controlado (com prop `checked`) e não-controlado (com `defaultChecked`).
 * 
 * @example
 * ```tsx
 * // Modo não-controlado
 * <Checkbox id="check1" name="accept" label="Aceito os termos" />
 * 
 * // Modo controlado
 * <Checkbox 
 *   id="check2" 
 *   name="accept" 
 *   label="Aceito os termos"
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      status,
      value,
      indeterminate = false,
      disabled = false,
      labeled = true,
      defaultChecked = false,
      className,
      onChange,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const classes = checboxVariants({ status, disabled, labeled, className });
    
    // Detectar se é modo controlado ou não-controlado
    const isControlled = props.checked !== undefined;
    
    // Preparar props do input baseado no modo
    const inputProps = isControlled
      ? { checked: props.checked, onChange }
      : { defaultChecked, onChange };

    return (
      <div className={classes}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          data-child="check-01"
          // @ts-expect-error - indeterminate is not a valid attribute for a checkbox
          indeterminate={indeterminate ? "indeterminate" : null}
          {...inputProps}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
);
