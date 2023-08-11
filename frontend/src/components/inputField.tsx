import React, { useRef } from "react";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ name, setName, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default InputField;
