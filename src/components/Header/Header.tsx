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

export type HeaderProps = {
  className?: string;
  headerLogo?: {
    logoSrc: string;
    assinatura: string;
    href?: string;
  };
  menu?: {
    onClick: () => void;
  };
  persona?: {
    src: string;
    name: string;
    description?: string;
  };
  headerLinks?: {
    title: string;
    options: {
      label: string;
      url: string;
    }[];
  };
  title: string;
  subtitle?: string;
  sticky?: boolean;
  compact?: boolean;
  size?: "sm" | "md" | "lg";
};

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
