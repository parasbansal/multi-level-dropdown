import { useState } from 'react'

import MultiLevelOption from "./MultiLevelOption"

export type DataItem = {
  id: string | number
  label: string
  value: string
  children?: DataItem[]
}

export type MultiLevelDropdownProps = {
  data: DataItem[]
  placeholder?: string
  isParentSelectable?: boolean
}

export default function MultiLevelDropdown({
  data,
  placeholder = "Select...",
  isParentSelectable = false
}: MultiLevelDropdownProps) {

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleInputValueChange = (item: DataItem) => {
    setValue(item.value)
    // setIsOpen(false)
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="absolute w-full flex items-center justify-center rounded border border-neutral-500 bg-white focus-within:ring px-2 py-1">
        <input
          type="text"
          placeholder={placeholder}
          className="border-none outline-none ring-0 w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <div className="absolute top-5 bg-white border border-neutral-500 rounded w-full max-h-80 overflow-y-auto">
          {data.map((item) => (
            <MultiLevelOption
              key={item.id}
              item={item}
              isParentSelectable={isParentSelectable}
              onOptionSelection={handleInputValueChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}