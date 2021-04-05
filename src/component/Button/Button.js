const Button = ({ type, className, onClick, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  className: null,
  onClick: () => {},
  children: null,
};

export default Button;
