import { ReactNode } from "react";

export interface BaseButtonProps {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
}

// Web-specific props
export interface WebButtonProps extends BaseButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

// React Native-specific props  
export interface NativeButtonProps extends BaseButtonProps {
  style?: Record<string, unknown>; // React Native StyleProp<ViewStyle>
  titleStyle?: Record<string, unknown>; // React Native StyleProp<TextStyle>
}