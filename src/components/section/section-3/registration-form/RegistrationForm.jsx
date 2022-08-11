import React, {useEffect, useState} from 'react';
import InputForm from "../../../UI/input/input-form/InputForm";
import './RegistrationFormStyles.css'
import UsersService from "../../../../utils/UsersService";
import InputRadio from "../../../UI/input/input-radio/InputRadio";
import InputSubmit from "../../../UI/input/submit/InputSubmit";
import axios from "axios";
import {FormingData} from "../../../../utils/FormData";

const RegistrationForm = ({setUserAdded}) => {
    const [positions, setPositions] = useState([])
    const [photoName, setPhotoName] = useState('Upload your photo')
    const [isError, setError] = useState(false)
    useEffect(() => {
        UsersService.getPositions()
            .then(res => setPositions(res.positions))
    }, [])

    const fileSelector = (e) => {
        setPhotoName(e.target.files[0].name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        const pos_id = e.target.form[3].checked ? 1 : e.target.form[4].checked ? 2 : e.target.form[5].checked ? 3 : 4
        const token =  await UsersService.getToken()
        const formData = FormingData(pos_id, e.target.form[0].value, e.target.form[1].value, e.target.form[2].value)
        await axios('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {
                method: 'post',
                data: formData,
                headers: {'Token': token,}
            })
            .then(setUserAdded)
            .catch(() => setError(true))
    }

    return (
        <form className={'form'}>
            <div className={'form-inputs'}>
                <InputForm placeholder={'Your name'} type={'text'}/>
                <InputForm placeholder={'Email'} type={'email'}/>
                <InputForm placeholder={'Phone'} type={'tel'}/>
                <span>+38 (XXX) XXX - XX - XX</span>
            </div>
            <div className="form-radio">
                <span>Select your position</span>
                <div className={'radio-inputs'}>
                    {positions.map((obj) =>
                        <InputRadio key={obj.id} id={`pos${obj.id}`} position={obj.name}
                                    name={'position'} value={obj.position}/>
                    )}
                </div>
            </div>
            <div className="file-container">
                <input className={'file-loader'} onChange={fileSelector} id={'file-loader'} type="file"
                       accept="image/*"/>
                <label htmlFor="file-loader" className={'file-loader-part1'}>
                    Upload
                </label>
                <label htmlFor="file-loader" className={'file-loader-part2'}>
                    {photoName}
                </label>
            </div>
            <div className={'submit'}>
                <InputSubmit onClick={handleSubmit} value={'Sign up'}/>
            </div>
            <div className="error">
                {isError && <span>An error occurred. Check the data</span>}
            </div>
        </form>
    );
};

export default RegistrationForm;