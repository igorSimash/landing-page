import React from 'react';
import './InputRadio.css'
const InputRadio = ({id, position, value, name}) => {
    return (
        <div className={'radio-input-div'}>
            <input type="radio" id={id} value={value} name={name}/>
            <label htmlFor={id}>{position}</label>
        </div>
    );
};

export default InputRadio;