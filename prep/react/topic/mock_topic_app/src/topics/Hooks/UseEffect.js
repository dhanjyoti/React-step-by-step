import React from "react";
import User from "./User";

const user = [
  { name: "daniel", email: "ee@dd.g", contact: 56655678, getData(){
    alert("hello")
} },
  { name: "loreal", email: "tt@dd.g", contact: 45678678, getData(){
    alert("chai")
} },
  { name: "carel", email: "yy@dd.g", contact: 1323278, getData(){
    alert("bye")
} },
  { name: "laneal", email: "cc@dd.g", contact: 9875678, getData(){
    alert("hi")
} },
];

const UseEffect = () => {
  return (
    <div>
      <h2>header</h2>
      {user.map((item, i) => (
            <User data={item}/>
      ))}
    </div>
  );
};

export default UseEffect;
