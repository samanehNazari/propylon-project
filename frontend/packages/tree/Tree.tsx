import { useCallback, useState } from "react";
import { TreeNode } from "./TreeNode";

export type NodeData = {
  name: string;
  id: string;
  level: number;
  parent_id?: string;
  childIds: string[];
  childNodes: NodeData[];
};

interface TreeProps<T> {
  data: T[];
  onItemSelect?: (id: string) => void;
}

export const Tree = <T extends NodeData>({
  data,
  onItemSelect,
}: TreeProps<T>) => {
  const [activeNodeId, setActiveNodeId] = useState("");

  const onClickHandler = useCallback(
    (id: string) => {
      setActiveNodeId(id);
      onItemSelect?.(id);
    },
    [onItemSelect]
  );

  return (
    <ul>
      {data.map((item) => (
        <TreeNode
          name={item.name}
          activeId={activeNodeId}
          level={item.level}
          childNodes={item.childNodes}
          id={item.id}
          onClick={onClickHandler}
          key={item.id}
        />
      ))}
    </ul>
  );
};
