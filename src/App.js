import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col my-2">
          <button
            className="btn btn-primary"
            disabled={count <= 0}
            onClick={decrement}
          >
            -
          </button>
          <span className="mx-5">
            {count}
          </span>
          <button
            className="btn btn-primary"
            disabled={count >= 10}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
