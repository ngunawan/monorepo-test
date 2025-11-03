"use client";

import { WebButtonProps } from "./types";

export const Button = ({
  children,
  className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
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

  // Apply disabled styles if disabled
  const finalClassName = disabled ? "btn-disabled" : className;

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testID}
    >
      {children}
    </button>
  );
};
