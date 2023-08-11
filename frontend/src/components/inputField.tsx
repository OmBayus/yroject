import React, { useRef } from 'react'

interface Props{
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const inputField: React.FC<Props> = ({name, setName, handleAdd}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef = React.useRef<HTMLInputElement>(null);

  return (
        <form onSubmit={(e) =>{
            handleAdd(e)
            inputRef.current?.blur()
            }}>
        <input type='input'
        ref={inputRef}
        value={name}
        onChange={
            (e) => setName(e.target.value)
        }
        />
        </form>
  )
}

export default inputField

