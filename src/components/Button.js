function Button(props) {
  const {disabled, onClick, children, className} = props;
  return (
    <button
      className={`btn btn-primary ${className}`}
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