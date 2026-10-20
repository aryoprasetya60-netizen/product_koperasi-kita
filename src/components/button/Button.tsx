
import styles from "./Button.module.css";

type ButtonProps = {
  name: string;
  variant?: "category" | "buy";
  active?: boolean;
};

function Button({
  name,
  variant = "category",
  active = false,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    active ? styles.active : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button type="button" className={className}>
        {name}
    </button>
  );
}

export default Button;