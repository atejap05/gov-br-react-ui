import "../../index.css";
import { useReducer } from "react";
import type { InputTypes } from "./@types";
import { Button } from "../Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faSearch } from "@fortawesome/free-solid-svg-icons";

type InputButtonProps = {
  inputType: InputTypes;
  onToggleIcon?: (value: InputTypes) => void;
  onClickSearch?: () => void;
};

type InputButtonState = {
  inputType: string;
  icon: FontAwesomeIconProps["icon"];
};

type InputButtonAction = {
  type: string;
};

const initialState: InputButtonState = {
  inputType: "password",
  icon: faEyeSlash,
};

const inputButtonReducer = (
  state: InputButtonState,
  action: InputButtonAction
): InputButtonState => {
  switch (action.type) {
    case "TOGGLE_ICON":
      return {
        ...state,
        icon: state.icon === faEye ? faEyeSlash : faEye,
      };
    case "TOGGLE_TYPE":
      return {
        ...state,
        inputType: state.inputType === "password" ? "text" : "password",
      };
    default:
      return state;
  }
};

const inplementedButton = ["password", "search"];

export const InputButton = ({
  inputType,
  onToggleIcon,
  onClickSearch,
}: InputButtonProps) => {
  const [state, dispatch] = useReducer(inputButtonReducer, initialState);

  const toggleIcon = () => {
    dispatch({ type: "TOGGLE_ICON" });
    dispatch({ type: "TOGGLE_TYPE" });
    onToggleIcon?.(state.inputType as InputTypes);
  };

  if (!inplementedButton.includes(inputType)) return null;

  if (inputType === "search") {
    return (
      <Button circle size="xs" variant="tertiary" onClick={onClickSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    );
  }

  return (
    <Button circle size="xs" variant="tertiary" onClick={toggleIcon}>
      <FontAwesomeIcon icon={state.icon} />
    </Button>
  );
};
