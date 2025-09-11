import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onclick = () => {setCount((prev) => prev + 1)};
  const onChange = (event) => {setkeyword(event.target.value)};
  // state 변경될 때마다 실행
  console.log("i run all the time");
  // useEffect: 처음 한번만 호출 (state 변경되도 호춡x)
  useEffect(() => {
    console.log("I run only once");
  }, []);
  // keyword가 바뀔 때만 실행
  useEffect(() => {
      console.log("I run when 'keyword' changes",  );
  }, [keyword]);
  // count가 바뀔 때만 실행
  useEffect(() => {
      console.log("I run when 'count' changes", count );
  }, [count]);
  // keyword, count가 바뀔 때만 실행
  useEffect(() => {
      console.log("I run when 'keyword' & 'count' changes", keyword, count );
  }, [keyword, count]);

  return (
      <div>
        <input 
          value={keyword} 
          onChange={onChange} 
          type="text" 
          placeholder="Seaarch here..."
        />
        <h1>{count}</h1>
        <button onClick={onclick}>click</button>
      </div>
  );
}

export default App;
