import React from 'react';

export interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const baseClass =
  'px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200';

const Button: React.FC<ButtonProps> = ({ children, className = '', href, ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClass} inline-block ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;