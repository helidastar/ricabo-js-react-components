import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Interactive Counter</h2>
      <h3>Count: {count}</h3>
      <button className="danger" onClick={() => setCount(count - 1)}>Decrease</button>
      <button className="primary" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="gray" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
