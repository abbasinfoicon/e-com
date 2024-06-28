'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { resetUserData } from '@/lib/features/userSlice';
import { persistor } from '@/lib/store'; // Import the persistor

const Logout = ({ logoutUser }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();

        const res = await logoutUser();

        if (res.status === 201 || res.status === 202) {
            toast.success(res.message);

            dispatch(resetUserData());
            await persistor.purge();
            
            router.push(res.redirectTo);
        } else {
            toast.error(res.message);
        }
    };

    return (
        <button className="logout" onClick={handleLogout} type='submit'>Logout</button>
    )
}

export default Logout