import { addUser } from '@/actions/userAction'
import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'
import UserForm from './UserForm';

const page = async () => {

    return (
        <>
            <Breadcrumb title="Register" />

            <section className="register-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <UserForm addUser={addUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page