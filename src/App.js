import React from "react";
import "./style.css";

export default function App() {
  const vocals =  ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const onKeyDown = e =>{
     if (
      vocals.includes(event.key)
    ) {
      e.preventDefault();
      console.log("vocal", e.key);
    } else {
      console.log(e.key);
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onKeyDown={onKeyDown}/>
    </div>
  );
}
