import { useReducer } from "react";
import type { InputTypes } from "./@types";
import { Button } from "../Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type InputButtonProps = {
  inputType: InputTypes;
  onToggleIcon?: (value: InputTypes) => void;
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

export const InputButton = ({ inputType, onToggleIcon }: InputButtonProps) => {
  const [state, dispatch] = useReducer(inputButtonReducer, initialState);

  const toggleIcon = () => {
    dispatch({ type: "TOGGLE_ICON" });
    dispatch({ type: "TOGGLE_TYPE" });
    onToggleIcon?.(state.inputType as InputTypes);
  };

  if (inputType !== "password") return null;

  return (
    <Button circle size="xs" variant="tertiary" onClick={toggleIcon}>
      <FontAwesomeIcon icon={state.icon} />
    </Button>
  );
};
