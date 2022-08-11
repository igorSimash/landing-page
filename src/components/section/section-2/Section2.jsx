import React, {useEffect, useState} from 'react';
import './Section2Styles.css'
import UserCard from "./user-card/UserCard";
import Button from "../../UI/button/Button";
import UsersService from '../../../utils/UsersService.js'
import Heading from "../../UI/h1/Heading";
import {useFetch} from "../../../hooks/useFetch";
import Loader from "../../UI/loader/Loader";

const Section2 = ({userAdded}) => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isUpdated, setIsUpdated] = useState(false)
    const [fetchUsers, isLoading] = useFetch(async () => {
        if (userAdded && !isUpdated) {
            await UsersService.getUsers(1)
                .then((res) => setUsers(res.users))
            setIsUpdated(true)
        } else {
            await UsersService.getUsers(page)
                .then((res) => setUsers(users.concat(res.users)))
        }
    })
    useEffect(() => {
        UsersService.getUsers()
            .then((res) => {
                setTotalPages(res.total_pages)
            })
    }, [userAdded])

    useEffect(() => {
        fetchUsers()
    }, [page, userAdded])
    return (
        <section className={'section-2'}>
            <div className={'content'}>
                <Heading id={'getH1'}>Working with GET request</Heading>
                <div className={'user-cards'}>
                    {users.map((user) =>
                        <UserCard key={user.id} email={user.email} img={user.photo}
                                  name={user.name} phone={user.phone} position={user.position}/>)}
                </div>
                {isLoading && <div className={'loader-container'}><Loader/></div>}
                <div className={`btn ${page === totalPages && 'hidden'}`}>
                    <Button onClick={() => setPage(page + 1)}>Show more</Button>
                </div>
            </div>
        </section>
    );
};

export default Section2;