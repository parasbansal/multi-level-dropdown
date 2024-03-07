import { useState } from 'react'

import { DataItem } from "./MultiLevelDropdown"

export type MultiLevelOptionProps = {
  item: DataItem
  isParentSelectable: boolean
  onOptionSelection: (item: DataItem) => void
  level?: number
}

export default function MultiLevelOption({
  item,
  isParentSelectable,
  onOptionSelection,
  level = 1
}: MultiLevelOptionProps) {

  const [isOpen, setIsOpen] = useState(false)

  const handleOptionSelection = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (item.children && item.children.length) {
      // It's not a leaf node
      if (isParentSelectable) {
        onOptionSelection(item);
      } else {
        setIsOpen(!isOpen);
      }
    } else {
      // It's a leaf node
      onOptionSelection(item);
    }
  }

  return (
    <>
      <button
        className="w-full pr-2 py-1 text-left hover:bg-neutral-200 flex items-center justify-between"
        style={{ paddingLeft: `${level}rem` }}
        onClick={(e: React.MouseEvent<HTMLElement>) => handleOptionSelection(e)}
      >
        {item.label}
        {item.children && item.children.length && (
          <span className="">
            {isOpen ? '🔽' : '▶️'}
          </span>
        )}
      </button>
      <div className="">
        {(item.children && item.children.length && isOpen) ? item.children.map((child) => (
          <MultiLevelOption
            key={child.id}
            item={child}
            isParentSelectable={isParentSelectable}
            onOptionSelection={onOptionSelection}
            level={level + 1}
          />
        )) : null}
      </div>
    </>
  );
}