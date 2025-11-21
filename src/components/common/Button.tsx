import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    href?: string;
    onClick?: () => void;
    icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    onClick,
    icon,
}) => {
    const className = `${styles.btn} ${variant === 'primary' ? styles.btnPrimary : styles.btnOutline}`;

    if (href) {
        return (
            <a href={href} className={className}>
                {icon && <i className={icon}></i>}
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {icon && <i className={icon}></i>}
            {children}
        </button>
    );
};
