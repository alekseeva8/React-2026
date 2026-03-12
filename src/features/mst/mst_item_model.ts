import { IAnyModelType, Instance, types } from "mobx-state-tree";

export const ItemModel: IAnyModelType = types
  .model("ItemModel", {
    id: types.identifier,
    name: types.string,
    level: types.number,
    opened: types.boolean,
    children: types.array(types.late(() => ItemModel)),
  })
  .actions((self) => ({
    toggleOpened() {
      self.opened = !self.opened;
    },
  }));

export type ItemModelType = Instance<typeof ItemModel>;
