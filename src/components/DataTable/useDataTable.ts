import { useState } from "react";
import type { TDensity, TRows } from "./@types";

export const useDataTable = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [showSelecedBar, setShowSelecedBar] = useState(false);
  const [density, setDensity] = useState<TDensity>("medium");
  const [selectedRows, setSelectedRows] = useState<TRows>([]);

  return {
    density,
    setDensity,
    searchedValue,
    setSearchedValue,
    showSelecedBar,
    setShowSelecedBar,
    selectedRows,
    setSelectedRows,
  };
};
