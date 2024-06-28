import { getProduct } from '@/actions/prdtAction';
import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'
import ClientPage from './ClientPage';

const Products = async () => {
    const data = await getProduct();

    return (
        <>
            <Breadcrumb title="Products" />

            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <div className="container">
                        <ClientPage data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products