import { useState } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export type HeaderLinksProps = {
  title: string;
  options: {
    label: string;
    url: string;
  }[];
};

const HeaderLinks = ({ title, options }: HeaderLinksProps) => {
  const [show, setShow] = useState({ show: false, active: false });

  return (
    <div
      className={
        show.show ? "header-links dropdown show" : "header-links dropdown"
      }
    >
      <Button
        className="dropdown-button"
        variant={"tertiary"}
        circle
        active={show.active}
        size="sm"
        data-taggle="dropdown"
        aria-label="Abrir Acesso Rápido"
        icon={faEllipsisV}
        onClick={() => {
          setShow({ show: !show.show, active: !show.active });
        }}
      />
      <ToolsList title={title} options={options} />
    </div>
  );
};

HeaderLinks.displayName = "HeaderLinks";

export { HeaderLinks };

/////////////// ToolsList //////////////////////
export type ToolsListProps = {
  title: string;
  options: {
    label: string;
    url: string;
  }[];
};

const ToolsList = ({ title, options }: ToolsListProps) => {
  return (
    <div className="br-list dropdown-list">
      <div className="header">
        <div className="title">{title}</div>
      </div>
      {options.map(option => (
        <a key={option.label} className={"br-item py-1 px-2"} href={option.url}>
          {option.label}
        </a>
      ))}
    </div>
  );
};

ToolsList.displayName = "ToolsList";

export { ToolsList };
