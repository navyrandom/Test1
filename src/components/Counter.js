import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const plus = ()=> {
      setCount(count +1)
    }
    const minus = ()=> {
      setCount(count -1)
    }
  return (
    <div style={{fontSize:"30px"}}>
      <p>{count}</p>
      <button onClick={plus}> +</button>
      <button onClick={minus}> -</button>
    </div>
  );
}

export default Counter;
