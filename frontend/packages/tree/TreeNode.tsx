import { FC } from "react";
import { Expandable } from "./Expandable";
import clsx from "clsx";
import { NodeData } from "./Tree";

interface TreeNodeProps {
  name: string;
  childNodes: NodeData[];
  level: number;
  id: string;
  activeId: string;
  onClick: (id: string) => void;
}

export const TreeNode: FC<TreeNodeProps> = ({
  name,
  childNodes,
  activeId,
  level,
  id,
  onClick,
}) => {
  return (
    <Expandable
      header={name}
      id={id}
      level={level}
      onClick={(selectedId) => onClick(selectedId)}
      className={clsx({
        "bg-indigo-900 text-white hover:bg-indigo-900": activeId === id,
      })}
    >
      {childNodes.length > 0 ? (
        <ul>
          {childNodes.map((item) => (
            <TreeNode
              name={item.name}
              activeId={activeId}
              level={item.level}
              childNodes={item.childNodes}
              id={item.id}
              key={item.id + item.name}
              onClick={onClick}
            />
          ))}
        </ul>
      ) : null}
    </Expandable>
  );
};
