import React from "react";
import { observer } from "mobx-react-lite";
import * as styles from "../Tree/styles";
import TreeNode from "./treeNode";
import { TreeItemProps } from "../../containers/TreeContainer";

const TreeView = observer((props: TreeItemProps) => (
  <>
    <div style={styles.mainContainer}>
      <div style={styles.flexContainer}>
      <ul style={styles.list}>{props.treeItems.map((item) => <TreeNode key={item.id} node={item} onRoll={props.onRoll} />)}</ul>
      <h2 style={styles.header}>{props.lastOpenedItemName}</h2> 
      </div>
    </div>
  </>
));

export default TreeView;
