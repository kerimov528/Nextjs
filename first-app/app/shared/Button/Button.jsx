// components/Button/Button.js
"use client";

import styles from "./Button.module.scss";

const Button = ({
  label,
  size = "normal", // 'normal', 'medium', 'small'
  variant = "primary", // 'primary', 'secondary', 'tertiary'
  iconPosition = "none", // 'left', 'right', 'none'
  disabled = false,
  state = "default", // 'default', 'hover', 'focus', 'click', 'loading', 'disabled'
  onClick = () => {},
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        styles[state]
      } ${iconPosition !== "none" ? styles[`icon-${iconPosition}`] : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconPosition === "left" && <span className={styles.icon}>+</span>}
      {label}
      {iconPosition === "right" && <span className={styles.icon}>→</span>}
    </button>
  );
};

export default Button;
