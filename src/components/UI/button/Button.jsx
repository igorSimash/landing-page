import React from 'react';
import './ButtonStyles.css'
const Button = ({children, onClick, color, type}) => {
    return (
        <button
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;