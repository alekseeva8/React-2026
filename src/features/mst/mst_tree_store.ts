import {IAnyModelType, Instance, types } from "mobx-state-tree";
import * as constants from "../../shared/constants/index";

const ItemModel: IAnyModelType = types
  .model("ItemModel", {
    id: types.identifier,
    name: types.string,
    level: types.number,
    opened: types.boolean,
    children: types.optional(types.array(types.late(() => ItemModel)), []),
  })
  .actions((self) => ({
    toggleOpened() {
      self.opened = !self.opened;
    },
  }));

const TreeStore = types
  .model("TreeStore", {
    items: types.array(ItemModel),
  })
  .views((self) => ({
    get lastOpenedItemName() {
      let lastName = null;

      const findOpenedItemName = (items: ItemModelType) => {
        if (!items) return;
        items.forEach((item: ItemModelType) => {
          if (item.opened === true) {
            lastName = item.name;
          }
          if (item.children.length > 0) {
            findOpenedItemName(item.children);
          }
        });
      };

      findOpenedItemName(self.items);
      return lastName;
    },
  }))
  .actions((self) => ({
    toggleItem(id: string) {
      const foundItem = findItem(self.items, id);
      if (foundItem) {
        foundItem.toggleOpened();
        if (!foundItem.opened) {
          toggleOpenedForChildren(foundItem.children);
        }
      }
    },
  }));

  export type ItemModelType = Instance<typeof ItemModel>;

const findItem = (items: ItemModelType[], id: string): ItemModelType | undefined => {
  
  const findRecursive = (items: ItemModelType[], id: string): ItemModelType | undefined => {
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
      if (item.children.length > 0) {
        const foundItem = findRecursive(item.children, id);
        if (foundItem) {
          return foundItem;
        }
      }
    }
    return undefined;
  };
  
  return findRecursive(items, id);
};

const toggleOpenedForChildren = (items: ItemModelType[]) => {
  if (!items) return;
  items.forEach((item) => {
    if (item.opened) {
      item.toggleOpened();
    }
    if (item.children.length > 0) {
      toggleOpenedForChildren(item.children);
    }
  });
};

export const treeStore = TreeStore.create({ items: constants.treeInitialData });

export type TreeStoreType = Instance<typeof TreeStore>;

