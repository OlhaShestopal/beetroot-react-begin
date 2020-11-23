import { CounterInput } from './CounterInput';
import { Button } from './Button';

function CounterItem(props) {
  const { count, handleDelete, id, handleUpdate } = props;

  const increment = (count) => {
    if (count < 10) {
      handleUpdate(count)
    }
  }

  const decrement = (count) => {
    if (count > 0) {
      handleUpdate(count)
    }
  }

  const update = (count) => {
    // code ...
  }

  return (
    <div className="row my-2">
      <div className="col-2 d-flex justify-content-center">
        <Button
          disabled={count <= 0}
          onClick={() => decrement(count - 1)}
        >
          -
        </Button>
      </div>

      <div className="col d-flex justify-content-center">
        <CounterInput
          value={count}
          handleUpdate={update}
          error={count < 0 || count > 10}
        />
      </div>

      <div className="col-2 d-flex justify-content-center">
        <Button
          disabled={count >= 10}
          onClick={() => increment(count + 1)}
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