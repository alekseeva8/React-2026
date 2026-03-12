export type TreeData = {
  id: string;
  name: string;
  level: number;
  opened: boolean;
  children: TreeData[];
};
