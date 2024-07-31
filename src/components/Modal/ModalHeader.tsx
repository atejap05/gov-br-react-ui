export type ModalHeaderProps = {
  onClose?: (close: boolean) => void;
  title: string;
  subtitle?: string;
};

const ModalHeader = ({ onClose, title, subtitle }: ModalHeaderProps) => {
  return (
    <div className={"br-modal-header"}>
      <div className="d-flex flex-column">
        <span className="text-up-02">{title}</span>
        {subtitle && <span className="label text-regular">{subtitle}</span>}
      </div>
      {onClose && (
        <button
          className="br-button close circle"
          type="button"
          data-dismiss="br-modal"
          aria-label="Fechar"
          onClick={() => onClose(false)}
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";

export { ModalHeader };
