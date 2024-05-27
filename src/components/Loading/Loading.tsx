import { cva } from "class-variance-authority";
import "../../style.css";

const loadingVariants = cva("br-loading", {
  variants: {
    medium: {
      true: "medium",
      false: "",
    },
  },
});

export type LoadingProps = {
  medium?: boolean;
  progress?: number;
  className?: string;
};

const Progress = () => {
  return (
    <>
      <div className="br-loading-mask full">
        <div className="br-loading-fill"></div>
      </div>
      <div className="br-loading-mask">
        <div className="br-loading-fill"></div>
      </div>
    </>
  );
};

export const Loading = ({ medium, progress, className }: LoadingProps) => {
  const classes = loadingVariants({ medium, className });

  return (
    <div
      className={classes}
      role="progressbar"
      data-progress={progress}
      aria-label="carregando"
    >
      {progress && <Progress />}
    </div>
  );
};
