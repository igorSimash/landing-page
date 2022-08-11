import React from 'react';
import './Section1Styles.css'
import Button from "../../UI/button/Button";
import Heading from "../../UI/h1/Heading";
const Section1 = () => {
    return (
        <section className={'section-1'}>
            <div className={'content'}>
                <Heading>Test assignment for front-end developer</Heading>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <Button onClick={() => document.querySelector('#postH1').scrollIntoView()}>
                    Sign up
                </Button>
            </div>

        </section>
    );
};

export default Section1;