import { ItemModelType } from "../../features/mst/mst_item_model";

export const isValidEmail = (value: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value.trim());
};

export const isValidPassword = (value: string) => {
  return value.trim().length >= 6;
};

export const findItem = (items: ItemModelType[], id: string): ItemModelType | undefined => {
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

export const toggleOpenedForChildren = (items: ItemModelType[]) => {
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

export const findLastOpenedItemName = (items: ItemModelType[]): string | null => {
  let lastName: string | null = null;

  const findOpenedItemName = (nodes: ItemModelType[]) => {
    if (!nodes) return;

    nodes.forEach((item) => {
      if (item.opened) {
        lastName = item.name;
      }

      if (item.children && item.children.length > 0) {
        findOpenedItemName(item.children);
      }
    });
  };

  findOpenedItemName(items);
  return lastName;
};
