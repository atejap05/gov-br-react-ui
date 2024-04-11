import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type InputTypes = "text" | "password" | "email" | "number" | "search";

export type InputSizes = "sm" | "md" | "lg";

export type InputVariants = {
  size: InputSizes;
  highlight: boolean;
  inline: boolean;
};

// export type InputButtonProps = {
//   icon: FontAwesomeIconProps["icon"];
//   color?: string;
//   action: () => void;
// };

export type InputProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  size?: InputSizes;
  highlight?: boolean;
  inline?: boolean;
  placeholder?: string;
  buttonIcon?: FontAwesomeIconProps["icon"];
  type?: InputTypes;
  label?: string;
  id: string;
  icon?: FontAwesomeIconProps["icon"];
  // button?: InputButtonProps;
};
