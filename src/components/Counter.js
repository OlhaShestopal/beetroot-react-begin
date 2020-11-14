import { useState } from 'react';

import { Button } from './Button';
import { CounterItem } from './CounterItem';

function Counter() {
  const [counters, setCounters] = useState([])

  const handleNewCounter = () => {
    const rnd = Math.round(Math.random() * 10)
    const arr = [
      {count: rnd, id: Math.random()},
      ...counters
    ]
    setCounters(arr)
  }

  const deleteCounter = (id) => {
    const items = counters.filter(count => count.id !== id);
    setCounters(items);
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
      {counters.map((i, idx) =>
        <CounterItem
          count={i.count}
          id={i.id}
          handleDelete={deleteCounter}
          key={i.id}
        />
      )}
    </div>
  );
}

export {
  Counter
}