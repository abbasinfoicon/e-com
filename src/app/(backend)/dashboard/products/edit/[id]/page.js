import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'
import Form from '../../add/Form'
import { getSingleProduct } from '@/actions/prdtAction';

const EditProduct = async ({ params }) => {
    const { id } = params;
    const data = await getSingleProduct(id);

    return (
        <div className="page-body">
            <Breadcrumb title={data.title} subtitle="Multikart Admin panel" parent="products" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <Form data={data} id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct