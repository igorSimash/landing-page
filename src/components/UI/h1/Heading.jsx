import React from 'react';
import './SectionName.css'
const Heading = ({children, id}) => {
    return (
        <h1 className={'section-name'} id={id}>
            {children}
        </h1>
    );
};

export default Heading;