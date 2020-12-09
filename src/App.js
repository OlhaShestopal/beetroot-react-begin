import { useState } from "react";
import { Item } from "./Item";
import { users as mocks } from './mock';

function App() {
  const [users, setUsers] = useState([]);

  const deleteUser = id => {
    const state = users.filter(user => user.id !== id);
    setUsers(state);
  }

  const updateUser = ({ name, id }) => {
    const state = [...users];
    const idx = users.findIndex(user => user.id === id);

    const user = {
      ...users[idx],
      name
    };

    state[idx] = user;
    setUsers(state);
  }

  return (
    <section>
      <h1>List of Users</h1>
      <button onClick={() => setUsers(mocks)}>
        Load users
      </button>

      <ul>
        {users.length > 0
          ? users.map(user =>
            <Item
              key={user.id}
              user={user}
              handleUpdate={updateUser}
              handleDelete={deleteUser}
            />
          )
          : <p>You have no any users in your database.</p>
        }
      </ul>
    </section>
  )
}

export default App;
