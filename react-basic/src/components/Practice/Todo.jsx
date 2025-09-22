import { useState, useEffect } from 'react';

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onchange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo===""){
      return;
    }
    setTodo("");
    setToDos((currentArray)=>[toDo, ...currentArray]);
  }
  return (
      <div>
        <h1>My To Dos {toDos.length}</h1>
        <form action="" onSubmit={onSubmit}>
          <input 
            onChange={onchange} 
            value={toDo} 
            type="text" 
            placeholder="Wrrtie your to do"
          />
          <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {toDos.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
  );
} 

export default App;
