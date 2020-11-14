import { useState } from 'react';
import { CounterInput } from './components/CounterInput'
import { Button } from './components/Button';
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
      <div className="row my-2">
        <div className="col-2 d-flex justify-content-center">
          <Button
            disabled={count <= 0}
            onClick={decrement}
          >
            -
          </Button>
        </div>

        <div className="col d-flex justify-content-center">
          <CounterInput
            value={count}
            handleUpdate={setCount}
            error={count < 0 || count > 10}
          />
        </div>

        <div className="col-2 d-flex justify-content-center">
          <Button
            disabled={count >= 10}
            onClick={increment}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
