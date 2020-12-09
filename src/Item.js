import { useState } from "react";

function Item({ user, handleUpdate, handleDelete }) {
  const [isLoading, setLoading] = useState(false);

  const handleInput = ({ target }) => {
    const { value: name } = target;
    handleUpdate({
      name,
      id: user.id
    })
  }

  const delayDelete = () => {
    setLoading(true);
    setTimeout(() => {
      handleDelete(user.id)
      setLoading(false);
    }, 2000);
  }

  return (
    <li>
      <span>ID: <b>{user.id}</b></span>
      <input
        value={user.name}
        onInput={handleInput}
      />
      <button onClick={delayDelete}>
        Delete
      </button>

      {isLoading && "Loading..."}
    </li>
  )
}

export {
  Item
}