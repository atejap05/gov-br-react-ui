import React from "react";

export type TDensity = "small" | "medium" | "large";

export type TRow = { [key: string]: string | number };
export type TRows = Array<TRow>;

export type TColumn = { field: string; title: string };
export type TColumns = Array<TColumn>;

export type TSort = "asc" | "desc";

export type TAction = {
  key: string;
  label: React.ReactNode;
  onClick: (selectedRows: TRows) => void;
};
