import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const increment = () => {
    if (count < 10) {
      updateValue(count + 1);
    }
  }

  const decrement = () => {
    if (count > 0) {
      updateValue(count - 1);
    }
  }

  const updateValue = (n) => {
    setCount(n);
    setValue(n);
  }

  const handleChange = ({target}) => {
    const n = +target.value;
    setValue(target.value);

    if (n < 0) {
      setCount(0)
      return;
    }

    if (n > 10) {
      setCount(10)
      return;
    }

    setCount(n);
  }

  const setErrorClass = n => (n < 0 || n > 10) ? 'is-invalid' : "";

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-2 d-flex justify-content-center">
          <button
            className="btn btn-primary"
            disabled={count <= 0}
            onClick={decrement}
          >
            -
          </button>
        </div>

        <div className="col d-flex justify-content-center">
          <input
            value={value}
            className={`form-control ${setErrorClass(value)}`}
            onChange={handleChange}
          />
        </div>

        <div className="col-2 d-flex justify-content-center">
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
