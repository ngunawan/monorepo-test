import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { NativeButtonProps } from "./types";

export const Button = ({ 
  children, 
  style, 
  titleStyle, 
  onPress, 
  disabled = false,
  testID 
}: NativeButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: disabled ? "#ccc" : "#007AFF",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: "center",
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
    >
      <Text
        style={[
          {
            color: disabled ? "#666" : "white",
            fontSize: 16,
            fontWeight: "600",
          },
          titleStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};