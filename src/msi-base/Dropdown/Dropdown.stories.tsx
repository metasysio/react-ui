import React from "react";
import { Dropdown } from "./Dropdown";
import { Item } from "./Dropdown.types";

export default {
  title: "DropdownComponent",
};
const items: Item[] = [
  { value: 1, label: "Item a" },
  { value: 2, label: "Item b" },
  { value: 3, label: "Item c" },
];

export const DropdownComponent = () => {
  return (
    <>
      <Dropdown name="items" placeholder="Selecione..." items={items} />
    </>
  );
};
