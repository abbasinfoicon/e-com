import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const EditOrder = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Edit Order" subtitle="Multikart Admin panel" parent="orders" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h3>Edit order</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditOrder