export type MenuFooterProps = {
  logos?: {
    src: string;
    className?: string;
  }[];
  links?: {
    label: string;
    url: string;
    icon?: string;
    className?: string;
  }[];
  info: {
    content: React.ReactNode | string;
    className?: string;
  };
};

const MenuFooter = ({ logos, links, info }: MenuFooterProps) => {
  return (
    <div className="menu-footer" data-visible="true">
      {logos && (
        <div className="menu-logos">
          {logos?.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              className={logo.className}
              alt={`logo-${index}`}
            />
          ))}
        </div>
      )}
      {links && (
        <div className="menu-links">
          {links?.map((link, index) => (
            <a key={index} href={link.url} className={link.className}>
              <span className="mr-1">{link.label}</span>
              {link.icon && (
                <i className={`fas ${link.icon}`} aria-hidden="true"></i>
              )}
            </a>
          ))}
        </div>
      )}
      <div className="menu-info">
        <div className={info.className}>{info.content}</div>
      </div>
    </div>
  );
};

MenuFooter.displayName = "MenuFooter";

export { MenuFooter };
