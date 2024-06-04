import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const AddProduct = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Add Product" subtitle="Multikart Admin panel" parent="products" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row product-adding">
                                    <div className="col-xl-5">
                                        <div className="add-product">
                                            <div className="row">
                                                <div className="col-xl-9 xl-50 col-sm-6 col-9">
                                                    <img src="/assets/images/pro3/1.jpg" alt=""
                                                        className="img-fluid image_zoom_1" />
                                                </div>
                                                <div className="col-xl-3 xl-50 col-sm-6 col-3">
                                                    <ul className="file-upload-product">
                                                        <li>
                                                            <div className="box-input-file"><input className="upload"
                                                                type="file" /><i className="fa fa-plus"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="box-input-file"><input className="upload"
                                                                type="file" /><i className="fa fa-plus"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="box-input-file"><input className="upload"
                                                                type="file" /><i className="fa fa-plus"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="box-input-file"><input className="upload"
                                                                type="file" /><i className="fa fa-plus"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="box-input-file"><input className="upload"
                                                                type="file" /><i className="fa fa-plus"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="box-input-file"><input className="upload"
                                                                type="file" /><i className="fa fa-plus"></i></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7">
                                        <form className="needs-validation add-product-form">
                                            <div className="form">
                                                <div className="form-group mb-3 row">
                                                    <label for="title" className="col-xl-3 col-sm-4 mb-0">Title :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" id="title"
                                                            type="text" required="" />
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3 row">
                                                    <label for="price" className="col-xl-3 col-sm-4 mb-0">Price :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" id="price"
                                                            type="text" required="" />
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3 row">
                                                    <label for="prdcode" className="col-xl-3 col-sm-4 mb-0">Product Code :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" id="prdcode"
                                                            type="text" required="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="form-group row">
                                                    <label for="size" className="col-xl-3 col-sm-4 mb-0">Select Size :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <select className="form-control digits" id="size">
                                                            <option>Small</option>
                                                            <option>Medium</option>
                                                            <option>Large</option>
                                                            <option>Extra Large</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                                                    <fieldset className="qty-box col-xl-9 col-xl-8 col-sm-7">
                                                        <div className="input-group">
                                                            <input className="form-control" type="number" />
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4">Add Description :</label>
                                                    <div className="col-xl-8 col-sm-7 description-sm">
                                                        <textarea className='form-control' cols="10"
                                                            rows="4"></textarea>
                                                    </div>
                                                    <div className="offset-xl-3 offset-sm-4 mt-4">
                                                        <button type="submit" className="btn btn-primary">Add</button>
                                                        <Link href="/dashboard/products" className="btn btn-light">Discard</Link>
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

export default AddProduct