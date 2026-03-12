import { Instance, types } from "mobx-state-tree";
import * as constants from "../../shared/constants/index";
import * as functions from "../../shared/functions/index";
import { ItemModel } from "./mst_item_model";

const TreeStore = types
  .model("TreeStore", {
    items: types.array(ItemModel),
  })
  .views((self) => ({
    get lastOpenedItemName() {
      return functions.findLastOpenedItemName(self.items);
    },
  }))
  .actions((self) => ({
    toggleItem(id: string) {
      const foundItem = functions.findItem(self.items, id);
      if (foundItem) {
        foundItem.toggleOpened();
        if (!foundItem.opened) {
          functions.toggleOpenedForChildren(foundItem.children);
        }
      }
    },
  }));

export const treeStore = TreeStore.create({ items: constants.treeInitialData });

export type TreeStoreType = Instance<typeof TreeStore>;
