import "../../style.css";
import React from "react";
import { Persona } from "../Persona";
import { cva } from "class-variance-authority";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderLogo } from "./HeaderLogo";
import { Button } from "../Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const headerVariants = cva("br-header", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    compact: {
      true: "compact",
      false: "",
    },
  },
});

/**
 * Props do componente Header
 */
export type HeaderProps = {
  /** Classe CSS adicional */
  className?: string;
  /** Configuração do logo no header */
  headerLogo?: {
    logoSrc: string;
    assinatura: string;
    href?: string;
  };
  /** Configuração do botão de menu */
  menu?: {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
  /** Configuração da persona (avatar do usuário) */
  persona?: {
    src: string;
    name: string;
    description?: string;
  };
  /** Configuração dos links rápidos no header */
  headerLinks?: {
    title: string;
    options: {
      label: string;
      url: string;
    }[];
  };
  /** Título principal do header */
  title: string;
  /** Subtítulo do header */
  subtitle?: string;
  /** Se o header deve ficar fixo no topo ao rolar */
  sticky?: boolean;
  /** Se o header deve usar modo compacto */
  compact?: boolean;
  /** Tamanho do header */
  size?: "sm" | "md" | "lg";
};

/**
 * Componente Header do Design System Gov.br
 * 
 * Cabeçalho padrão para aplicações governamentais com logo, título, menu e persona.
 * 
 * @example
 * ```tsx
 * <Header
 *   title="Minha Aplicação"
 *   subtitle="Sistema de gestão"
 *   menu={{ onClick: () => setMenuOpen(true) }}
 *   headerLogo={{
 *     logoSrc: "/logo.png",
 *     assinatura: "Governo Federal"
 *   }}
 * />
 * ```
 */
const Header = ({
  size = "md",
  title,
  subtitle,
  menu,
  persona,
  headerLogo,
  headerLinks,
  compact = false,
  sticky,
  className,
}: HeaderProps) => {
  const classes = headerVariants({ size, compact, className });
  return (
    <header className={classes} data-sticky={sticky ? "data-sticky" : null}>
      <div className="container-lg">
        <div className="header-top">
          {headerLogo && (
            <HeaderLogo
              logoSrc={headerLogo.logoSrc}
              assinatura={headerLogo.assinatura}
              href={headerLogo.href}
            />
          )}
          <div className="header-actions">
            {headerLinks && (
              <HeaderLinks
                title={headerLinks.title}
                options={headerLinks.options}
              />
            )}

            <div className="header-login">
              <div className="header-avatar">
                {persona && (
                  <Persona
                    src={persona.src}
                    name={persona.name}
                    description={persona.description}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="header-menu">
            {menu && (
              <div className="header-menu-trigger">
                <Button
                  size="sm"
                  circle
                  aria-label="Menu"
                  data-toggle="menu"
                  data-target="#main-navigation"
                  id="menu-sticky"
                  variant="tertiary"
                  icon={faBars}
                  onClick={menu.onClick}
                />
              </div>
            )}
            <div className="header-info">
              <div className="header-title">{title}</div>
              <div className="header-subtitle">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
