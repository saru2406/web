import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="react-card">
      <h2>React Widget</h2>
      <p>This section is rendered by React using Vite.</p>
      <button className="react-button" onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
