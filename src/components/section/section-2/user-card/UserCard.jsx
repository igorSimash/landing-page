import React, {useState} from 'react';
import './UserCardStyles.css'
import photo from '../../../../assets/photo-cover.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const UserCard = ({img, name, phone, position, email}) => {
    const [tooltip, showTooltip] = useState(true);
    return (
        <div className={'card'}>
            {img.includes('.png')
                ?
                <img src={photo} alt=""/>
                :
                <img src={img} alt=""/>
            }

            <div className={'user-bio'}>
                <div className={'name-div'}>
                    <Tippy content={name} placement="bottom" maxWidth={'1000px'} className={'tippy-tooltip'}>
                        <span className={'user-name'}>{name}</span>
                    </Tippy>
                </div>
                <div className={'user-contacts'}>
                    <div>
                        <span className={'contact'}>{position}</span>
                    </div>
                    <div>
                        <Tippy content={email} placement="bottom" maxWidth={'1000px'} className={'tippy-tooltip'}>
                            <span className={'contact'}>{email}</span>
                        </Tippy>
                    </div>
                    <div>
                        <span className={'contact'}>{phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;