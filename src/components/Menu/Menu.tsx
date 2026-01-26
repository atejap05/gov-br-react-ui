import { useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { MenuHeader, type MenuHeaderProps } from "./MenuHeader";
import { MenuFooter, type MenuFooterProps } from "./MenuFooter";
import { MenuBody, type MenuItem } from "./MenuBody";
import "@/style.css";

const menuVariants = cva("br-menu", {
  variants: {
    showMenu: {
      true: "active col-sm-4 col-lg-3 px-0",
      false: "",
    },
    mode: {
      push: "push",
      offcanvas: "",
    },
    density: {
      compact: "small",
      normal: "medium",
      large: "large",
    },
  },
});

/**
 * Props do componente Menu
 */
export type MenuProps = {
  /** Classe CSS adicional */
  className?: string;
  /** Modo de exibição do menu: "push" empurra o conteúdo, "offcanvas" sobrepõe */
  mode?: "push" | "offcanvas";
  /** Controla a visibilidade do menu */
  show: boolean;
  /** Configuração do cabeçalho do menu */
  header?: MenuHeaderProps;
  /** Configuração do rodapé do menu */
  footer?: MenuFooterProps;
  /** Densidade dos itens do menu */
  density?: "compact" | "normal" | "large";
  /** Callback chamado quando um item do menu é clicado */
  onClick?: (id: string) => void;
  /** Array de itens do menu */
  items: MenuItem[];
};

/**
 * Componente Menu do Design System Gov.br
 * 
 * Menu lateral navegável com suporte a subitens e diferentes modos de exibição.
 * 
 * @example
 * ```tsx
 * <Menu
 *   show={isOpen}
 *   mode="offcanvas"
 *   items={[
 *     { id: "home", icon: "home", content: "Início" },
 *     { id: "about", icon: "info-circle", content: "Sobre" }
 *   ]}
 *   onClick={(id) => console.log(id)}
 * />
 * ```
 */
const Menu = ({
  className,
  mode = "push",
  show,
  header,
  footer,
  density = "normal",
  onClick,
  items,
}: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(show);
  }, [show]);

  const classes = menuVariants({ showMenu, mode, density, className });

  return (
    <div className={classes}>
      <div className="menu-container">
        <div
          className={
            mode === "push" ? "menu-panel" : "menu-panel col-sm-4 col-lg-3"
          }
        >
          {header && (
            <MenuHeader
              handleClose={() => setShowMenu(false)}
              title={header.title}
              image={{
                className: header.image?.className ?? "",
                src: header.image?.src ?? "",
              }}
            />
          )}
          <MenuBody menuItems={items} onClick={id => onClick?.(id)} />
          {footer && (
            <MenuFooter
              logos={footer.logos}
              links={footer.links}
              info={footer.info}
            />
          )}
        </div>
        <div className="menu-scrim" data-dismiss="menu" tabIndex={0}></div>
      </div>
    </div>
  );
};

Menu.displayName = "Menu";

export { Menu };
