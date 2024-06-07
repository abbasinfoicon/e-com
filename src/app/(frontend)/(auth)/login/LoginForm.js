'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const LoginForm = ({ loginUser }) => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await loginUser(formData);

        if (response.status === 201 || response.status === 202) {
            toast.success(response.message);

            if (response.role == "user") {
                router.push(response.redirectTo);
            } else if (response.role == "vendor") {
                router.push('/vendor');
            } else {
                router.push('/dashboard/user');
            }
        } else {
            toast.error(response.message);
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