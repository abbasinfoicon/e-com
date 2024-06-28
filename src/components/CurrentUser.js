'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Logout from './Logout';

const CurrentUser = ({ userData, token, logoutUser }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const user = useSelector((state) => state.user.data);

    useEffect(() => {
        if (user && userData.length) {
            const filterUser = userData.filter((item) => item._id === user._id);
            setCurrentUser(filterUser[0] || null);
        }
    }, [user, userData]);

    return (
        <>
            {currentUser ? `${currentUser.fname} ${currentUser.lname}` : 'MyAccount'}
            <ul className="onhover-show-div">
                {
                    token ?
                        <>
                            <li>
                                <Link href={currentUser ? (currentUser.role === 'user' ? '/user' : currentUser.role === 'vendor' ? '/vendor' : '/dashboard') : '#'}>
                                    Profile
                                </Link>
                            </li>
                            <li><Logout logoutUser={logoutUser} /></li>
                        </> :
                        <>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register">Register</Link></li>
                        </>
                }
            </ul>
        </>
    );
}

export default CurrentUser;
