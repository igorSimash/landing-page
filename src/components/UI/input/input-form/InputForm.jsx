import React from 'react';
import './InputFormStyles.css'
const InputForm = ({type, placeholder}) => {
    return (
        <input
            type={type}
            className={'text-input'}
            placeholder={placeholder}
        />

    );
};

export default InputForm;