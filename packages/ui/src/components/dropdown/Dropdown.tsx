import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const DropdownRoot = DropdownMenu.Root;
export const DropdownTrigger = DropdownMenu.Trigger;
export const DropdownPortal = DropdownMenu.Portal;
export const DropdownContent = DropdownMenu.Content;
export const DropdownItem = DropdownMenu.Item;
export const DropdownSeparator = DropdownMenu.Separator;
export const DropdownLabel = DropdownMenu.Label;
export const DropdownGroup = DropdownMenu.Group;

export const Dropdown = ({
  trigger,
  children,
  open,
  onOpenChange,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild className={styles.trigger}>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={5}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const DropdownItemWithStyles = ({
  children,
  className,
  ...props
}: DropdownMenu.DropdownMenuItemProps & { className?: string }) => (
  <DropdownMenu.Item className={`${styles.item} ${className || ""}`} {...props}>
    {children}
  </DropdownMenu.Item>
);

export const DropdownSeparatorWithStyles = ({
  className,
  ...props
}: DropdownMenu.DropdownMenuSeparatorProps & { className?: string }) => (
  <DropdownMenu.Separator
    className={`${styles.separator} ${className || ""}`}
    {...props}
  />
);

export const DropdownLabelWithStyles = ({
  children,
  className,
  ...props
}: DropdownMenu.DropdownMenuLabelProps & { className?: string }) => (
  <DropdownMenu.Label
    className={`${styles.label} ${className || ""}`}
    {...props}
  >
    {children}
  </DropdownMenu.Label>
);
