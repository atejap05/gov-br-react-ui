import "@/styles/index.css";
import { forwardRef, useState, useRef } from "react";
import type { InputTypes } from "./@types";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { InputFeedback } from "./InputFeedback";
import { InputButton } from "./InputButton";

export type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: InputTypes;
  feedback?: string;
  status?: "danger" | "warning" | "info" | "success" | null;
  children?: React.ReactNode;
  id: string;
  onSearch?: (value: string) => void;
  icon?: FontAwesomeIconProps["icon"];
};

// TODO: Separar componentes acessorios em arquivos próprios

const InputIcon = (icon: FontAwesomeIconProps["icon"]) => {
  return (
    <div className="input-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

const InputLabel = ({ label, id }: { label: string; id: string }) => {
  return (
    <div className="input-label">
      <label className="text-nowrap" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ label, id, icon, type, status, feedback, onSearch, ...props }, ref) => {
    const [inputType, setInputType] = useState(type);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
      if (!onSearch) return;
      onSearch(inputRef.current?.value as string);
    };

    return (
      <>
        {label ? <InputLabel id={id} label={label} /> : null}
        <div className="input-group">
          {icon ? InputIcon(icon) : null}
          <input
            // TODO: fazer testes de formulario para verificar se o ref esta funcionando corretamente
            ref={inputRef || ref}
            id={id}
            type={inputType}
            autoComplete="new-password"
            {...props}
          />

          <InputButton
            onToggleIcon={value => setInputType(value)}
            inputType={type as InputTypes}
            onClickSearch={handleSearch}
          />

          {feedback && <InputFeedback status={status} feedback={feedback} />}
        </div>
      </>
    );
  }
);
BasicInput.displayName = "Input";

export { BasicInput };
