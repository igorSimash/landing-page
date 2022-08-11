import React from 'react';
import './InputSubmitStyles.css'
const InputSubmit = ({value, onClick}) => {
    return (
        <input
            type={"submit"}
            value={value}
            onClick={onClick}
        />
    );
};

export default InputSubmit;