function Button(props) {
  const {disabled, onClick, children} = props;
  return (
    <button
      className="btn btn-primary"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export {
  Button
}