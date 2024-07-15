import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  faEllipsisV,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { nanoid } from "nanoid";
import { DropdownDensity } from "./DropdownDensity";
export type DataTableHeaderProps = {
  title?: string;
  onDensityChange?: (density: "small" | "medium" | "large") => void;
  onSearch: (search: string) => void;
};

const DataTableHeader = ({
  onSearch,
  onDensityChange,
  title,
}: DataTableHeaderProps) => {
  const [showSearch, setShowSearch] = useState(false); // [1
  const [density, setDensity] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [dropdownDensityOpen, setDropdownDensityOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useClickOutside({
    onClickOutside: () => setDropdownDensityOpen(false),
    elementRef: dropdownRef,
  });
  useEffect(() => {
    onDensityChange && onDensityChange(density);
  }, [density, onDensityChange]);

  const inputSearchID = nanoid();

  return (
    <div className="table-header">
      <div className="top-bar">
        <div className="table-title">{title}</div>
        <div
          className={
            dropdownDensityOpen
              ? "actions-trigger text-nowrap dropdown"
              : "actions-trigger text-nowrap"
          }
        >
          <Button
            circle
            variant="tertiary"
            title="Ver mais opções de ação"
            data-toggle="dropdown"
            aria-label="Ver mais opções de ação"
            aria-haspopup="true"
            data-visible={dropdownDensityOpen}
            aria-expanded={dropdownDensityOpen}
            icon={faEllipsisV}
            onClick={() => setDropdownDensityOpen(!dropdownDensityOpen)}
          />
          <DropdownDensity
            dropdownRef={dropdownRef}
            dropdownDensityOpen={dropdownDensityOpen}
            setDensity={setDensity}
          />
        </div>
        <div className="search-trigger">
          <Button
            circle
            variant="tertiary"
            title="Abrir busca"
            aria-label="Abrir busca"
            data-toggle="search"
            icon={showSearch ? faTimes : faSearch}
            onClick={() => {
              setShowSearch(true);
            }}
          />
        </div>
      </div>
      <div className={showSearch ? "search-bar show" : "search-bar"}>
        <div className="br-input">
          <label htmlFor={inputSearchID}>Buscar na tabela</label>
          <input
            ref={inputRef}
            id={inputSearchID}
            type="search"
            placeholder="Buscar na tabela"
            aria-labelledby="button-input-search"
            aria-label="Buscar na tabela"
            onChange={e => {
              onSearch(e.target.value);
            }}
          />
          <Button
            circle
            variant="tertiary"
            title="Buscar"
            aria-label="Buscar"
            icon={faSearch}
            onClick={() => {
              onSearch(inputRef.current?.value || "");
            }}
          />
        </div>
        <Button
          circle
          variant="tertiary"
          title="Fechar busca"
          aria-label="Fechar busca"
          onClick={() => setShowSearch(false)}
          icon={faTimes}
        />
      </div>

      <div className="selected-bar">
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
    </div>
  );
};

DataTableHeader.displayName = "DataTableHeader";

export { DataTableHeader };
