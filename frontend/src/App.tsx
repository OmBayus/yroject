import React from 'react';
import './App.css';
import InputField from './components/inputField';
import { Name } from './model';
import List from './components/list';

const App: React.FC = () => {
  const [name, setName] = React.useState<string>(" ");
  const [names, setNames] = React.useState<Name[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(name){
      setNames([...names, {id:Date.now(), name:name, isName: true}]);
      setName("");
    }

  };
  
  console.log(names);

  return (
    <div className="App">
      Merabalarrr!
      <span className="heading">YROJECT</span>
      <InputField name={name} setName={setName} handleAdd={handleAdd} />
      <List names={names} setNames={setNames}/>
    </div>
  );
}

export default App;
