import React from "react";

export type TDensity = "small" | "medium" | "large";

export type TRow = { [key: string]: string | number };
export type TRows = Array<TRow>;

export type TColumn = {
  field: string;
  title: string;
  render?: (row: TRow) => React.ReactNode;
  className?: string | ((row: TRow) => string);
  sort?: boolean;
};
export type TColumns = Array<TColumn>;

export type TSort = "asc" | "desc" | "none";

export type TAction = {
  key: string;
  label: React.ReactNode;
  onClick: (selectedRows: TRows) => void;
};
