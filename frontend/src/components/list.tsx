import React from "react";
import { Name } from "../model";

interface Props {
  names: Name[];
  setNames: React.Dispatch<React.SetStateAction<Name[]>>;
}

const List: React.FC<Props> = ({ names, setNames }) => {
  return (
    <div>
      {names.map((name) => (
        <li> sedaaa {name.name} </li>
      ))}
    </div>
  );
};

export default List;
