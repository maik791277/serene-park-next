import React from 'react';
import Link from "next/link";

interface LinkProps {
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  color?: 'black' | 'white' | 'myCustomColor';
  href: string;
  isExternal?: boolean;
  border?: boolean;
}

const sizeClasses = {
  small: 'text-sm h-[30px] rounded-sm',
  medium: 'text-base h-[40px] rounded-md',
  large: 'text-lg h-[60px] rounded-xl',
};

const colorClasses = {
  black: 'text-black border-black',
  white: 'text-white border-white',
  myCustomColor: 'text-myCustomColor border-myCustomColor ',
};

const UiLink: React.FC<LinkProps> = ({ size = 'medium', color = 'white', children, href = '#', isExternal = false, border = false }) => {
  const borderClasses = border
    ? 'border-2 border-solid bg-transparent'
    : '';

  const baseClasses =
    'w-full transition-colors-opacity transition-colors max-w-60 bg-myCustomColor rounded flex items-center justify-center text-center hover:opacity-30';

  const combinedClasses = `${baseClasses} ${borderClasses} ${sizeClasses[size]} ${colorClasses[color]}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={combinedClasses} href={href}>
      {children}
    </Link>
  );
};

export default UiLink;
