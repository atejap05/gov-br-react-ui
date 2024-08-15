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

export type MenuProps = {
  className?: string;
  mode?: "push" | "offcanvas";
  show: boolean;
  header?: MenuHeaderProps;
  footer?: MenuFooterProps;
  density?: "compact" | "normal" | "large";
  onClick?: (id: string) => void;
  items: MenuItem[];
};

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
