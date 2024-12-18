import React from "react";

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const UiButton: React.FC<ButtonProps> = ({ size = 'medium', children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white rounded hover:bg-blue-600 ${sizeClasses[size]}`}
    >
      {children}
    </button>
  )
}

export default UiButton;