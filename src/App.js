import React, { useState } from "react";

const Up = ({count, setCount}) => {
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>UP!!</button>
    </div>
  )
}

const Down = ({count, setCount}) => {
  return (
    <div>
      <button onClick={() => {setCount(count - 1)}}>DOWN!!</button>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Up count={count} setCount={setCount}/>
      <Down count={count} setCount={setCount}/>
    </div>
  )
}

export default App;