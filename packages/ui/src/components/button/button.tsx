"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { WebButtonProps } from "./types";
import styles from "./button.module.css";
import { twMerge } from "tailwind-merge";

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
  asChild = false,
  leftElement,
  rightElement,
  ...props
}: WebButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (onPress) onPress();
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type={!asChild ? type : undefined}
      className={twMerge(
        styles.button,
        className,
        "bg-red-50",
        "text-white"
      )}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testID}
    >
      {leftElement}
      <Slottable>{children} sfs2</Slottable>
      {rightElement}
    </Comp>
  );
};
