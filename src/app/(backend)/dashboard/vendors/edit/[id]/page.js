import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const EditVendor = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Edit Vendor" subtitle="Multikart Admin panel" parent="vendors" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card tab2-card">
                            <div className="card-body">
                                <form className="needs-validation user-add">
                                    <h4>Account</h4>
                                    <div className="form-group row">
                                        <label htmlFor="validationCustom0"
                                            className="col-xl-3 col-md-4"><span>*</span> First Name</label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="validationCustom0" type="text"
                                                required="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="validationCustom1"
                                            className="col-xl-3 col-md-4"><span>*</span> Last Name</label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="validationCustom1" type="text"
                                                required="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="validationCustom2"
                                            className="col-xl-3 col-md-4"><span>*</span> Email</label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="validationCustom2" type="text"
                                                required="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="validationCustom3"
                                            className="col-xl-3 col-md-4"><span>*</span> Password</label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="validationCustom3"
                                                type="password" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="validationCustom4"
                                            className="col-xl-3 col-md-4"><span>*</span> Confirm
                                            Password</label>
                                        <div className="col-xl-8 col-md-7">
                                            <input className="form-control" id="validationCustom4"
                                                type="password" required="" />
                                        </div>
                                    </div>

                                    <h4>Permission</h4>
                                    <div className="permission-block">
                                        <div className="attribute-blocks">
                                            <h5 className="f-w-600 mb-3">Product Related permition </h5>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label>Add Product</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label className="d-block" htmlFor="edo-ani1">
                                                            <input className="radio_animated" id="edo-ani1"
                                                                type="radio" name="rdo-ani" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block" htmlFor="edo-ani2">
                                                            <input className="radio_animated" id="edo-ani2"
                                                                type="radio" name="rdo-ani" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label>Update Product</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label className="d-block" htmlFor="edo-ani3">
                                                            <input className="radio_animated" id="edo-ani3"
                                                                type="radio" name="rdo-ani1" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block" htmlFor="edo-ani4">
                                                            <input className="radio_animated" id="edo-ani4"
                                                                type="radio" name="rdo-ani1" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label>Delete Product</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label className="d-block" htmlFor="edo-ani5">
                                                            <input className="radio_animated" id="edo-ani5"
                                                                type="radio" name="rdo-ani2" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block" htmlFor="edo-ani6">
                                                            <input className="radio_animated" id="edo-ani6"
                                                                type="radio" name="rdo-ani2" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label className="mb-0 sm-label-radio">Apply
                                                        Discount</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated pb-0">
                                                        <label className="d-block mb-0" htmlFor="edo-ani7">
                                                            <input className="radio_animated" id="edo-ani7"
                                                                type="radio" name="rdo-ani3" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block mb-0" htmlFor="edo-ani8">
                                                            <input className="radio_animated" id="edo-ani8"
                                                                type="radio" name="rdo-ani3" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="attribute-blocks">
                                            <h5 className="f-w-600 mb-3">Category Related permition </h5>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label>Add Category</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label className="d-block" htmlFor="edo-ani9">
                                                            <input className="radio_animated" id="edo-ani9"
                                                                type="radio" name="rdo-ani4" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block" htmlFor="edo-ani10">
                                                            <input className="radio_animated" id="edo-ani10"
                                                                type="radio" name="rdo-ani4" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label>Update Category</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label className="d-block" htmlFor="edo-ani11">
                                                            <input className="radio_animated" id="edo-ani11"
                                                                type="radio" name="rdo-ani5" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block" htmlFor="edo-ani12">
                                                            <input className="radio_animated" id="edo-ani12"
                                                                type="radio" name="rdo-ani5" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label>Delete Category</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label className="d-block" htmlFor="edo-ani13">
                                                            <input className="radio_animated" id="edo-ani13"
                                                                type="radio" name="rdo-ani6" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block" htmlFor="edo-ani14">
                                                            <input className="radio_animated" id="edo-ani14"
                                                                type="radio" name="rdo-ani6" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-4">
                                                    <label className="mb-0 sm-label-radio">Apply
                                                        discount</label>
                                                </div>
                                                <div className="col-xl-9 col-sm-8">
                                                    <div
                                                        className="form-group m-checkbox-inline custom-radio-ml d-flex radio-animated pb-0">
                                                        <label className="d-block mb-0" htmlFor="edo-ani15">
                                                            <input className="radio_animated" id="edo-ani15"
                                                                type="radio" name="rdo-ani7" />
                                                            Allow
                                                        </label>
                                                        <label className="d-block mb-0" htmlFor="edo-ani16">
                                                            <input className="radio_animated" id="edo-ani16"
                                                                type="radio" name="rdo-ani7" checked="" />
                                                            Deny
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="pull-right">
                                        <button type="button" className="btn btn-primary">Update</button>
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

export default EditVendor