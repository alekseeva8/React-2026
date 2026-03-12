import React, { MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import { treeStore } from "../features/mst/mst_tree_store";
import TreeView from "../views/Tree";
import { TreeData } from "../shared/types";

export type TreeItemProps = {
  treeItems: TreeData[];
  onRoll: (e: MouseEvent<HTMLButtonElement>, id: string) => void;
  lastOpenedItemName: string;
};

const TreeContainer = observer(() => {
  const handleRoll = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    treeStore.toggleItem(id);
  };

  const props: TreeItemProps = {
    treeItems: treeStore.items,
    onRoll: handleRoll,
    lastOpenedItemName: treeStore.lastOpenedItemName ?? "",
  };

  return <TreeView {...props} />;
});

export default TreeContainer;
