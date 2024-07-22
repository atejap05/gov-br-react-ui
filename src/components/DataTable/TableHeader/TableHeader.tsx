import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  faEllipsisV,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Button";
import { nanoid } from "nanoid";
import { DropdownDensity } from "./DropdownDensity";
import { TableSelectedBar } from "./TableSelectedBar";
import { useDataTableContext } from "../context";

export type TableHeaderProps = {
  tableTitle?: string;
};

// Displaying the table header --> title, search bar, and density options

const TableHeader = ({ tableTitle }: TableHeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownDensityOpen, setDropdownDensityOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setSearchedValue } = useDataTableContext();

  useClickOutside({
    onClickOutside: () => setDropdownDensityOpen(false),
    elementRef: dropdownRef,
  });

  const inputSearchID = nanoid();

  return (
    <div className="table-header">
      <div className="top-bar">
        <div className="table-title">{tableTitle}</div>
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
              setSearchedValue(e.target.value);
            }}
          />
          <Button
            circle
            variant="tertiary"
            title="Buscar"
            aria-label="Buscar"
            icon={faSearch}
            onClick={() => {
              setSearchedValue(inputRef.current?.value || "");
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
      <TableSelectedBar />
    </div>
  );
};

TableHeader.displayName = "TableHeader";

export { TableHeader };
