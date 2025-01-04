import React from "react"

interface SelectInputProps {
  children: React.ReactNode
  value: string
  options: Record<string, string>
  onChange?: (_event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectInput: React.FC<SelectInputProps> = (
  {
    children,
    value,
    options,
    onChange
  }
) => {
  return <>
    <label>{children}</label>
    <select value={String(value)} onChange={onChange}>
      {
        Object.entries(options).map(([value, label], i) => (
          <option key={i} value={value}>{label}</option>
        ))
      }
    </select>
  </>
}

export default SelectInput
