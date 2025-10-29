import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface TestButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const TestButton = ({ children, onPress }: TestButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};