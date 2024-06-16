import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    children,
    className,
    variant = 'primary',
    ...rest
}: ButtonProps) => {
    return (
        <button className={`btn btn--${variant} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
