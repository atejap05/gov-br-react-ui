export type DropdownDensityProps = {
  className?: string;
  dropdownRef: React.RefObject<HTMLDivElement>;
  dropdownDensityOpen: boolean;
  setDensity: React.Dispatch<
    React.SetStateAction<"small" | "medium" | "large">
  >;
};

const DropdownDensity = ({
  dropdownRef,
  dropdownDensityOpen,
  setDensity,
}: DropdownDensityProps) => {
  return (
    <div
      ref={dropdownRef}
      className="br-list"
      role="menu"
      aria-labelledby="button-dropdown-density"
      hidden={!dropdownDensityOpen}
      aria-hidden={dropdownDensityOpen}
      data-dropdown={dropdownDensityOpen ? true : null}
    >
      <button
        className="br-item"
        type="button"
        data-density="small"
        role="menuitem"
        onClick={() => setDensity("small")}
      >
        Densidade alta
      </button>
      <span className="br-divider"></span>
      <button
        className="br-item"
        type="button"
        data-density="medium"
        role="menuitem"
        onClick={() => setDensity("medium")}
      >
        Densidade média
      </button>
      <span className="br-divider"></span>
      <button
        className="br-item"
        type="button"
        data-density="large"
        role="menuitem"
        onClick={() => setDensity("large")}
      >
        Densidade baixa
      </button>
    </div>
  );
};

DropdownDensity.displayName = "DropdownDensity";

export { DropdownDensity };
