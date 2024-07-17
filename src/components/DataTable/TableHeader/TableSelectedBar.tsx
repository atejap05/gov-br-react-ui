export type TableSelectedBarProps = {};

const TableSelectedBar = ({}: TableSelectedBarProps) => {
  return (
    <div className={false ? "selected-bar show" : "selected-bar"}>
      <div className="info">
        <span className="count">0</span>
        <span className="text">item selecionado</span>
      </div>
      <div className="actions-trigger text-nowrap">
        <button
          className="br-button circle inverted"
          type="button"
          data-toggle="dropdown"
          data-target="target02-2684"
          aria-controls="target02-2684"
          aria-label="Ver mais opções de ação"
          aria-haspopup="true"
        >
          <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <div
          className="br-list"
          id="target02-2684"
          role="menu"
          aria-labelledby="button-dropdown-selection"
          // hidden="hidden"
        >
          <button
            className="br-item"
            type="button"
            data-toggle=""
            role="menuitem"
          >
            Ação 1
          </button>
          <span className="br-divider"></span>
          <button className="br-item" type="button" role="menuitem">
            Ação 2
          </button>
        </div>
      </div>
    </div>
  );
};

TableSelectedBar.displayName = "TableSelectedBar";

export { TableSelectedBar };
