import React, { MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import * as styles from "./styles";
import { Button } from "@progress/kendo-react-buttons";

export type ItemProps = {
  id: string;
  name: string;
  isOpened: boolean;
  hasChildren: boolean;
  onRoll: (e: MouseEvent<HTMLButtonElement>, id: string) => void;
};

const ItemView = observer(({ id, name, isOpened, hasChildren, onRoll }: ItemProps) => (
  <>
    <div>
      {hasChildren && (
        <Button onClick={(e) => onRoll(e, id)} {...styles.getRollButtonStyle(isOpened)}></Button>
      )}
      <span style={styles.spanStyle(hasChildren)}>{name}</span>
    </div>
  </>
));

export default ItemView;
