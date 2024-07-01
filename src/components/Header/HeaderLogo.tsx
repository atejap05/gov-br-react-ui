export type HeaderLogoProps = {
  logoSrc: string;
  assinatura: string;
  href?: string;
};

const HeaderLogo = ({ logoSrc, href, assinatura }: HeaderLogoProps) => {
  return (
    <div className="header-logo">
      <a target="_blank" href={href}>
        <img src={logoSrc} alt="logo" />
      </a>
      <span className="br-divider vertical"></span>
      <div className="header-sign">{assinatura}</div>
    </div>
  );
};

HeaderLogo.displayName = "HeaderLogo";

export { HeaderLogo };
