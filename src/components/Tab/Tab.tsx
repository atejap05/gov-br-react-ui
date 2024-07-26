import { useState } from "react";
import { cva } from "class-variance-authority";
import "../../style.css";

const tabVariants = cva("br-tab", {
  variants: {
    size: {
      md: "",
      lg: "large",
      sm: "small",
    },
    dark: {
      true: "dark-mode",
      false: "",
    },
  },
});

type Tab = {
  id: number | string;
  label: string;
  description?: string;
  counter?: number;
  icon?: string;
};

export type TabProps = {
  className?: string;
  dark?: boolean;
  size?: "sm" | "md" | "lg";
  tabs: Tab[];
  onClick?: (tab: Tab) => void;
};

const Tab = ({
  tabs,
  dark = false,
  size = "md",
  onClick,
  className,
}: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const classes = tabVariants({ size, dark, className });
  const hasCounter = tabs.some(tab => tab.counter);
  return (
    <div className={classes} data-counter={hasCounter}>
      <nav className="tab-nav">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={`tab-${tab.id}`}
              className={`tab-item ${activeTab === index ? "active" : ""}`}
            >
              <button
                type="button"
                onClick={() => {
                  if (onClick) {
                    onClick(tab);
                  }

                  setActiveTab(index);
                }}
                data-panel={`panel-${index + 1}`}
              >
                <span className="name">
                  <span className="d-flex flex-column flex-sm-row">
                    <span className="icon mb-1 mb-sm-0 mr-sm-1">
                      {tab.icon && (
                        <i className={`fas ${tab.icon}`} aria-hidden="true"></i>
                      )}
                    </span>
                    <span className="name">{tab.label}</span>
                  </span>
                </span>
              </button>
              {typeof tab.counter === "number" && (
                <span
                  className={
                    dark ? "results text-primary-pastel-02" : "results"
                  }
                >
                  {tab.counter}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={`content-${tab.id}`}
            className={`tab-panel ${activeTab === index ? "active" : ""}`}
            id={`panel-${index + 1}`}
          >
            <p>{tab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Tab.displayName = "Tab";

export { Tab };
