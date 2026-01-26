import "../../style.css";
import React from "react";
import { cva } from "class-variance-authority";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

/////////// Button Component ///////////

const buttonVariants = cva("br-button", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      tertiary: "",
      danger: "danger",
      success: "success",
      warning: "warning",
      info: "info",
    },
    size: {
      xs: "xsmall",
      sm: "small",
      md: "medium",
      lg: "large",
    },
    circle: {
      true: "circle",
      false: "",
    },

    active: {
      true: "active",
      false: "",
    },
    loading: {
      true: "loading",
      false: "",
    },
    dark: {
      true: "dark-mode",
      false: "",
    },
    block: {
      true: "block",
      false: "",
    },
    inverted: {
      true: "inverted",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    circle: false,
    active: false,
    loading: false,
    dark: false,
    block: false,
    inverted: false,
  },
});

/**
 * Props do componente Button
 */
export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  /** Variante visual do botão */
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning"
    | "info";
  /** Tamanho do botão */
  size?: "xs" | "sm" | "md" | "lg";
  /** Se o botão deve ser circular */
  circle?: boolean;
  /** Se o botão está desabilitado */
  disabled?: boolean;
  /** Se o botão está ativo/selecionado */
  active?: boolean;
  /** Se o botão está em estado de carregamento */
  loading?: boolean;
  /** Se o botão deve usar tema escuro */
  dark?: boolean;
  /** Se o botão deve ocupar toda a largura disponível */
  block?: boolean;
  /** Se o botão deve usar estilo invertido */
  inverted?: boolean;
  /** Ícone do botão. Aceita string (ex: "home", "fa-home") ou IconProp do FontAwesome */
  icon?: string | FontAwesomeIconProps["icon"];
  /** Tipo do botão HTML */
  type?: "button" | "submit" | "reset";
};

/**
 * Componente Button do Design System Gov.br
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Clique aqui
 * </Button>
 * 
 * <Button variant="secondary" icon="fa-plus">
 *   Adicionar
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      circle,
      disabled,
      active,
      loading,
      dark,
      block,
      inverted,
      children,
      icon,
      type = "button",
      className,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={buttonVariants({
          variant,
          size,
          circle,
          active,
          loading,
          dark,
          inverted,
          block,
          className,
        })}
        {...props}
      >
        {icon ? (
          <div className="d-flex align-items-center justify-content-between gap-2">
            {typeof icon === "string" ? (
              <i className={`fas ${icon.startsWith("fa-") ? icon : `fa-${icon}`}`} aria-hidden="true" />
            ) : (
              <FontAwesomeIcon icon={icon} />
            )}
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
