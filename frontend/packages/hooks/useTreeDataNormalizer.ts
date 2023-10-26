import { NodeData } from "packages/tree";
import { useMemo } from "react";

interface NestedData {
  name: string;
  level: number;
  id: string;
  parent_id: string;
}

export const useTreeDataNormalizer = (dataset: NestedData[]) => {
  const hashTable = useMemo(
    () =>
      dataset.reduce((table, data) => {
        table[data.id] = { ...data, childNodes: [], childIds: [] };
        return table;
      }, {} as Record<string, NodeData>),
    [dataset]
  );

  return useMemo(
    () =>
      dataset.reduce((dataTree, data) => {
        if (data?.parent_id) {
          if (hashTable?.[data.parent_id].childIds.includes(data.id)) {
            return dataTree;
          }
          hashTable[data.parent_id].childNodes.push(hashTable[data.id]);
          hashTable[data.parent_id].childIds.push(data.id);
        } else {
          dataTree.push(hashTable[data.id]);
        }
        return dataTree;
      }, [] as NodeData[]),
    [dataset, hashTable]
  );
};
