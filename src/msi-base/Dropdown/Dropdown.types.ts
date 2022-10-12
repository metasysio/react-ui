export type Item = {
  value: string | number;
  label: string;
};

export interface DropdownProps {
  placeholder: string;
  items: Item[];
  value?: string | ReadonlyArray<string> | number | undefined;
  name: string;
  onChange?: (value: any) => void;
  onSelectItem?: (item: Item) => void;
}
