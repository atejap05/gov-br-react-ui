import { cn } from "../../utils";

type ListTitleProps = {
  title: string;
  className?: string;
};

export const ListTitle = ({ title, className }: ListTitleProps) => {
  return (
    <>
      <div className="header">
        <div className={cn("title", className)}>{title}</div>
      </div>
      <span className="br-divider"></span>
    </>
  );
};
