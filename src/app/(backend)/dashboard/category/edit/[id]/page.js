import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const EditCategory = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Edit Category" subtitle="Multikart Admin panel" parent="category" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row product-adding">
                                    <div className="col-xl-7">
                                        <form className="needs-validation add-product-form">
                                            <div className="form">
                                                <div className="form-group mb-3 row">
                                                    <label htmlFor="name" className="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" id="name" type="text" required="" />
                                                    </div>
                                                </div>

                                                <div className="form-group mb-3 row">
                                                    <label htmlFor="price" className="col-xl-3 col-sm-4 mb-0">Price :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" id="price"
                                                            type="text" required="" />
                                                    </div>
                                                </div>

                                                <div className="form-group mb-3 row">
                                                    <label htmlFor="category" className="col-xl-3 col-sm-4 mb-0">Category :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" id="category" type="text" required="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form">
                                                <div className="form-group row">
                                                    <label htmlFor="status" className="col-xl-3 col-sm-4 mb-0">Status :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <select className="form-control digits" id="status">
                                                            <option>Success</option>
                                                            <option>Padding</option>
                                                            <option>Cancel</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4">Add Description :</label>
                                                    <div className="col-xl-8 col-sm-7 description-sm">
                                                        <textarea className="form-control" cols="10" rows="4"></textarea>
                                                    </div>

                                                    <div className="offset-xl-3 offset-sm-4 mt-4">
                                                        <button type="submit" className="btn btn-primary me-2">Update</button>
                                                        <Link href="/dashboard/category" className="btn btn-light">Discard</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory