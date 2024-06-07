import { loginUser } from '@/actions/userAction'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <>
            <Breadcrumb title="Login" />

            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <LoginForm loginUser={loginUser} />
                            </div>
                        </div>

                        <div className="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p>
                                <Link href="/register" className="btn btn-solid">Create an Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login