"use client";

import { WebButtonProps } from "./types";

export const Button = ({
  children,
  className,
  type = "button",
  onClick,
  onPress,
  disabled = false,
  testID,
}: WebButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (onPress) onPress();
  };

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testID}
    >
      {children} hello world
    </button>
  );
};
