import React, { MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import ItemView from "./itemView";
import * as styles from "../Tree/styles";
import { ItemProps } from "./itemView";

export type TreeData = {
  id: string;
  name: string;
  level: number;
  opened: boolean;
  children: TreeData[];
};

type TreeNodeProps = {
  node: TreeData;
  onRoll: (e: MouseEvent<HTMLButtonElement>, id: string) => void;
};

const TreeNode = observer(({ node, onRoll }: TreeNodeProps) => {
  const hasChildren = Boolean(node.children.length);

  const itemProps: ItemProps = {
    id: node.id,
    name: node.name,
    isOpened: node.opened,
    hasChildren: hasChildren,
    onRoll: onRoll,
  };

  return (
    <li>
      <ItemView {...itemProps} />
      {hasChildren && node.opened && (
        <ul style={styles.list}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onRoll={onRoll} />
          ))}
        </ul>
      )}
    </li>
  );
});

export default TreeNode;
