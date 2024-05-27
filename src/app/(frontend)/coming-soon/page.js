import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const CommingSoon = () => {
    return (
        <>
            <Breadcrumb title="Comming Soon" />

            <div className="template-password">
                <div className="container">
                    <div id="container" className="text-center">
                        <div>
                            <div id="login">
                                <div>
                                    <div className="logo mb-4">
                                        <Link href="#">
                                            <img src="../assets/images/icon/logo.png" alt="Multikart_fashion" className="img-fluid" />
                                        </Link>
                                    </div>
                                    <h2 className="mb-3">
                                        Will be Opening Soon!
                                    </h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form action="#" className="theme-form">
                                            <div className="col-md-12 mt-2">
                                                <h3>Enter Your Email: </h3>
                                            </div>
                                            <div className="form-row row">
                                                <div className="col-md-12">
                                                    <input type="password" name="password" id="password" className="form-control"
                                                        autofocus="" />
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="actions">
                                                        <button type="submit" className="btn btn-solid">notify me</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div id="footer" className="mt-4">
                                    <div id="owner">
                                        Are you the store owner? <Link href="#">Log in here</Link> or <Link href="#">change your password
                                            settings</Link>
                                    </div>
                                </div>
                            </div>
                            <div id="powered">
                                <p>© 2018, Powered by Multikart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommingSoon