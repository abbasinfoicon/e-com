'use client'
import { setUserData } from '@/lib/features/userSlice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LoginForm = ({ loginUser }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const res = await loginUser(formData);

        if (res.status === 201 || res.status === 202) {
            toast.success(res.message);

            const { createdAt, updatedAt, ...dataWithoutTimestamps } = res.data;
            dispatch(setUserData(dataWithoutTimestamps));

            if (res.data.role === "user") {
                router.push('/user');
            } else if (res.data.role === "vendor") {
                router.push('/vendor');
            } else {
                router.push('/dashboard/user');
            }
        } else {
            toast.error(res.message);
        }
    };

    return (
        <form className="theme-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" placeholder="Enter your Email" required="" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter your password" required="" />
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <button type='submit' className="btn btn-solid">Login</button>
                <Link href='/forgot-password' className='forgot-password'>Forgot Passwrod?</Link>
            </div>
        </form>
    )
}

export default LoginForm