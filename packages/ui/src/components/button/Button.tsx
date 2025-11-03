"use client";

import { WebButtonProps } from "./types";
import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  type = "button",
  onClick,
  onPress,
  disabled = false,
  testID,
  variant = "primary",
  size = "medium",
}: WebButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (onPress) onPress();
  };

  // Build CSS classes using CSS modules
  const buttonClasses = [
    styles.button,
    styles[variant],
    size !== "medium" && styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testID}
    >
      {children}
    </button>
  );
};
