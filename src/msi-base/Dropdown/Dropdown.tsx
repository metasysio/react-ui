import { useRef, useState, useEffect } from "react";
import "./Dropdown.scss";

const ArrowDown = () => {
  return (
    <svg height="40" width="40" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

import { DropdownProps, Item } from "./Dropdown.types"; 

export const Dropdown = ({
  name,
  value,
  items,
  placeholder,
  onSelectItem,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>();
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (value) {
      setSelectedItem(items.find((item) => item.value === value));
    }
  }, [value, items]);

  const getDisplay = () => {
    if (selectedItem && value) {
      return selectedItem.label;
    }
    return placeholder;
  };

  const handleInputClick = () => {
    setOpen(!open);
  };

  const onItemClick = (item: Item) => {
    setOpen(false);
    setSelectedItem(item);

    if (onChange) {
      onChange(item.value);
    }

    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  const isSelected = (item: Item) => {
    if (!selectedItem) {
      return false;
    }

    return selectedItem.value === item.value;
    return ""
  };

  return (
    <div className={"dropdown"} ref={ref}>
      <input type="hidden" value={value} name={name} readOnly />
      {/* Dropdown Input */}
      <div className={"input"} onClick={handleInputClick}>
        <div className={"selectedValue"}>{getDisplay()}</div>
        <div className={"tools"}>
          <div className={"tool"}>
            <ArrowDown />
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className={"menu"}>
          <ul>
            {items.map((item: Item) => (
              <li
                key={item.value}
                onClick={() => onItemClick(item)}
                className={`${isSelected(item) && "selected"}`}
              >
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
