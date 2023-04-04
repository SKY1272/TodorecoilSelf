import React from "react";
import { textState } from "./Recoil";
import { useRecoilValue } from "recoil";
export default function Child() {
  const _ReadValue = useRecoilValue(textState);
  console.log("I am from Child");
  return (
    <>
      <p>I am from Child</p>
      <div>
        {_ReadValue.map((x, i) => (
          <div key={i}>
            <p>{x}</p>
          </div>
        ))}
      </div>
    </>
  );
}
