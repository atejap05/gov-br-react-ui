import { useState } from "react";
import { useDataTableContext } from "../context";
import { Button } from "@/components/Button";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// Displaying the selected bar --> count of selected items and actions

const TableSelectedBar = () => {
  const { selectedRows, actions } = useDataTableContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const showBar = selectedRows.length > 0;

  const classes = dropdownOpen
    ? "actions-trigger text-nowrap dropdown"
    : "actions-trigger text-nowrap";

  return (
    <div className={showBar ? "selected-bar show" : "selected-bar"}>
      <div className="info">
        <span className="count">{selectedRows.length}</span>
        <span className="text">item selecionado</span>
      </div>
      <div className={classes}>
        <Button
          circle
          variant="tertiary"
          inverted
          title="Ver mais opções de ação"
          aria-label="Ver mais opções de ação"
          aria-haspopup="true"
          onClick={() => actions && setDropdownOpen(!dropdownOpen)}
          icon={faEllipsisV}
        />

        <div
          className="br-list dropdown-list"
          role="menu"
          aria-labelledby="button-dropdown-selection"
          hidden={!dropdownOpen}
        >
          {actions?.map(action => (
            <button
              key={action.key}
              className="br-item"
              type="button"
              role="menuitem"
              onClick={() => action.onClick(selectedRows)}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

TableSelectedBar.displayName = "TableSelectedBar";

export { TableSelectedBar };
