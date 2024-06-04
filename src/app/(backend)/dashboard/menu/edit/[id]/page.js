import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const EditMenu = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Edit Menu" subtitle="Multikart Admin panel" parent="menu" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <form className="needs-validation">
                                    <div className="form-group row">
                                        <label for="" className="col-xl-3 col-md-4"><span>*</span>Menu Name</label>
                                        <div className="col-md-8">
                                            <input className="form-control" id="" type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-xl-3 col-md-4">Status</label>
                                        <div className="col-xl-9 col-md-8">
                                            <div className="checkbox checkbox-primary">
                                                <input id="checkbox-primary-2" type="checkbox"
                                                    data-original-title="" title="" />
                                                <label for="checkbox-primary-2">Enable the Menu</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-primary d-block">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMenu