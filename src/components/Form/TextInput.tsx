import React from "react";

interface TextInputProps {
  children: React.ReactNode,
  value: string | number;
  autofocus?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = (
  {
    children,
    value,
    autofocus,
    readonly,
    disabled,
    onChange
  }
) => {
  return <>
    <label>{children}</label>
    <input type="text"
           autoFocus={autofocus}
           value={String(value)}
           readOnly={readonly}
           disabled={disabled}
           onChange={onChange}/>
  </>
}

export default TextInput
