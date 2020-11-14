// export function CounterInput() {
function CounterInput(props) { 
  const { value, handleUpdate, error = false } = props;

  return (
    <input
      value={value}
      className={`form-control ${error && "is-invalid"}`}
      onChange={(e) => handleUpdate(+e.target.value)}
    />
  )
}

export {
  CounterInput
}