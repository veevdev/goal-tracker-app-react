import classes from "./Button.module.css";
const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
