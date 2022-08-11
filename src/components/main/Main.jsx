import React, {createContext, useState} from 'react';
import './MainStyles.css'
import Section1 from "../section/section-1/Section1";
import Section2 from "../section/section-2/Section2";
import Section3 from "../section/section-3/Section3";

const Main = () => {
    const [userAdded, setUserAdded] = useState(false)
    return (
        <main>
            <Section1/>
            <Section2 userAdded={userAdded}/>
            <Section3 userAdded={userAdded} setUserAdded={() => setUserAdded(true)}/>
        </main>
    );
};

export default Main;