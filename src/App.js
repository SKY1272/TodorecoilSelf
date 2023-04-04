import "./styles.css";
import React, { useState } from "react";
import { textState } from "./components/Recoil";
import { useRecoilState } from "recoil";
import C from "./components/Child";

export default function App() {
  const [data, setData] = useState("");
  const [newData, setNewData] = useRecoilState(textState);
  function handleChange(e) {
    setData(e.target.value);
  }

  function handleClick() {
    setNewData([...newData, data]);
    setData("");
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={handleChange} value={data} />
      <button onClick={handleClick}>AddItem</button>
      {newData.map((x, i) => (
        <div key={i}>
          {" "}
          <p>{x}</p>{" "}
        </div>
      ))}
      <C />
    </div>
  );
}
