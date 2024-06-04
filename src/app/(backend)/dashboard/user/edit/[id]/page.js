import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const EditUser = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Edit User" subtitle="Multikart Admin panel" parent="user" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card tab2-card">
                            <div className="card-body">
                                <form className="needs-validation user-add" novalidate="">
                                    <h4>Account Details</h4>
                                    <div className="form-group row">
                                        <label htmlFor="" className="col-xl-3 col-md-4">
                                            <span>*</span> First Name </label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="" type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="" className="col-xl-3 col-md-4">
                                            <span>*</span> Last Name </label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="" type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="" className="col-xl-3 col-md-4">
                                            <span>*</span> Email </label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="" type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="" className="col-xl-3 col-md-4">
                                            <span>*</span> Password </label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="" type="password" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="" className="col-xl-3 col-md-4">
                                            <span>*</span> Confirm Password </label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="" type="password" required="" />
                                        </div>
                                    </div>

                                    <div className="pull-right">
                                        <button type="button" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser