import { useState } from 'react';
import { CounterInput } from './CounterInput';
import { Button } from './Button';

function CounterItem(props) {
  const {count: defaultValue, handleDelete, id} = props;
  const [count, setCount] = useState(defaultValue);

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

        <Button
          onClick={() => handleDelete(id)}
          className="mx-2 btn-danger"
        >
          x
        </Button>
      </div>
    </div>
  )
}

export {
  CounterItem
}