export type MenuHeaderProps = {
  handleClose?: () => void;
  image?: {
    src: string;
    className?: string;
  };
  title: string;
};

const MenuHeader = ({ handleClose, image, title }: MenuHeaderProps) => {
  return (
    <div className="menu-header" data-visible={"true"}>
      <div className="menu-title">
        <img
          className={image?.className}
          src={image?.src}
          alt={`Logo ${title}`}
        />
        <span>{title}</span>
      </div>
      <div className="menu-close">
        <button
          className="br-button circle"
          type="button"
          aria-label="Fechar o menu"
          data-dismiss="menu"
          onClick={handleClose}
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

MenuHeader.displayName = "MenuHeader";

export { MenuHeader };
