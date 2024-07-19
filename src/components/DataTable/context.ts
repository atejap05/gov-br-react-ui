import { createContext, useContext } from "react";
import type { TDensity, TRows, TAction } from "./@types";

export type DataTableContextType = {
  density: TDensity;
  setDensity: (value: TDensity) => void;
  showSelecedBar: boolean;
  setShowSelecedBar: (value: boolean) => void;
  searchedValue: string;
  setSearchedValue: (value: string) => void;
  selectedRows: TRows;
  setSelectedRows: (value: TRows) => void;
  actions?: TAction[];
};

export const DataTableContext = createContext<DataTableContextType>({
  density: "medium",
  setDensity: () => {},
  showSelecedBar: false,
  setShowSelecedBar: () => {},
  searchedValue: "",
  setSearchedValue: () => {},
  selectedRows: [],
  setSelectedRows: () => {},
  actions: [],
});

export function useDataTableContext() {
  return useContext(DataTableContext);
}

export const DataTableContextProvider = DataTableContext.Provider;
