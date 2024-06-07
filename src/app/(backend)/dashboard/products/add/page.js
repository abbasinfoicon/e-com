import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'
import Form from '../Form'

const AddProduct = () => {

    return (
        <div className="page-body">
            <Breadcrumb title="Add Product" subtitle="Multikart Admin panel" parent="products" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct