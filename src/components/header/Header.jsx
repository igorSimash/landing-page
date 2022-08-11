import React from 'react';
import './HeaderStyles.css'
import Button from "../UI/button/Button";
import Logo from '../../assets/Logo.svg'

const Header = () => {
    return (
        <header>
            <div className={'header-container'}>
                <div className={'logo'}>
                    <img
                        src={Logo}
                        height={'26px'}
                        width={'104px'}
                        alt=""/>
                </div>
                <div className={'buttons'}>
                    <div className={'btn-el'}>
                        <Button onClick={() => document.querySelector('#getH1').scrollIntoView()}>
                            Users
                        </Button>
                    </div>
                    <div className={'btn-el'}>
                        <Button onClick={() => document.querySelector('#postH1').scrollIntoView()}>
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;