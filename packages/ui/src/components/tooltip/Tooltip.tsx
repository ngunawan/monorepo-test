"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayDuration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;
export const TooltipContent = TooltipPrimitive.Content;
export const TooltipArrow = TooltipPrimitive.Arrow;

export const Tooltip = ({
  children,
  content,
  side = "top",
  align = "center",
  delayDuration = 700,
  open,
  onOpenChange,
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root
      delayDuration={delayDuration}
      open={open}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={styles.content}
          side={side}
          align={align}
          sideOffset={5}
        >
          {content}
          <TooltipPrimitive.Arrow className={styles.arrow} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
