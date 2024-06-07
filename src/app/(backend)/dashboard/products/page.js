import { delProduct, getProduct } from '@/actions/prdtAction';
import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import ProductList from './ProductList';

const Products = async () => {
    const data = await getProduct();

    return (
        <div className="page-body">
            <Breadcrumb title="Product List" subtitle="Multikart Admin panel" />

            <div className="container-fluid position-relative">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header justify-content-end">
                                <Link href='/dashboard/products/add' className="btn btn-primary add-row mt-md-0 mt-2">Add Product</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductList data={data} delProduct={delProduct} />
            </div>
        </div>
    )
}

export default Products