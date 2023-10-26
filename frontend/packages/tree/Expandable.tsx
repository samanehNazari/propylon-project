import { FC, ReactNode, useState } from "react";
import { ChevronDown, ChevronRight } from "@local/icons";
import clsx from "clsx";

interface ExpandableProps {
  children?: ReactNode;
  header: ReactNode;
  onClick: (id: string) => void;
  id: string;
  level: number;
  className?: string;
}

const indent = ["pl-2", "pl-6", "pl-11"];

export const Expandable: FC<ExpandableProps> = ({
  header,
  children,
  className,
  onClick,
  level,
  id,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpansion = () => setExpanded(!isExpanded);

  return (
    <li className={clsx("cursor-pointer")}>
      <div
        className={clsx(
          "hover:bg-gray-200 flex items-center py-1 gap-3 cursor-pointer",
          className,
          indent[level - 1]
        )}
        onClick={() => {
          toggleExpansion();
          !children && onClick(id);
        }}
      >
        {children && (isExpanded ? <ChevronDown /> : <ChevronRight />)}
        <h2 className={clsx({ "pl-6": !children })}>{header}</h2>
      </div>
      {isExpanded && children}
    </li>
  );
};
