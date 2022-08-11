import React from 'react';
import Heading from "../../UI/h1/Heading";
import RegistrationForm from "./registration-form/RegistrationForm";
import Success from '../../../assets/success-image.svg';
import './Section3Styles.css'
const Section3 = ({setUserAdded, userAdded}) => {
    return (
        <section className={'section-3'}>
            {
                !userAdded
                    ?
                    <div className={'content'}>
                        <div className={'heading1'}>
                            <Heading id={'postH1'}>Working with POST request</Heading>
                        </div>
                        <RegistrationForm setUserAdded={setUserAdded}/>
                    </div>
                    :
                    <div>
                        <Heading>User successfully registered</Heading>
                        <img src={Success} alt="" className={'success-img'}/>
                    </div>
            }
        </section>
    );
};

export default Section3;