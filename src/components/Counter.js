import { useState } from 'react';

import { Button } from './Button';
import { CounterItem } from './CounterItem';

function Counter() {
  const [counters, setCounters] = useState([])

  const handleNewCounter = () => {
    const rnd = Math.round(Math.random() * 10)
    const arr = [
      { count: rnd, id: Math.random() },
      ...counters
    ]
    setCounters(arr)
  }

  const updateCounter = ({ id, count }) => {
    const state = [...counters]
    const idx = state.findIndex(i => i.id === id)
    state[idx] = {
      ...state[idx],
      count
    }
    setCounters(state)
  }

  const deleteCounter = (id) => {
    const items = counters.filter(count => count.id !== id);
    setCounters(items);
  }

  const totalAmount = () => {
    return counters.reduce((acc, current) => acc + current.count, 0)
  }

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-2 d-flex justify-content-center">
          <Button onClick={handleNewCounter}>
            Add new counter
          </Button>
        </div>
      </div>
      {counters.length > 0 ? counters.map((i, idx) =>
        <CounterItem
          count={i.count}
          id={i.id}
          handleDelete={deleteCounter}
          handleUpdate={count => updateCounter({ id: i.id, count })}
          key={i.id}
        />
      ) : <p>You have no any counters.</p>}

      <p>
        Total counter: {totalAmount()}
      </p>
    </div>
  );
}

export {
  Counter
}