'use client'
import DeleteModal from '@/components/backend/DeleteModal'
import Search from '@/components/backend/Search'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ProductList = ({ data, delProduct }) => {
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filteredResults = query ? data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())) : data;
        setFilteredData(filteredResults);
    }, [query, data]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="row products-admin ratio_asos">
            <Search query={query} handleChange={handleChange} />

            {
                filteredData.map((item) => {
                    return (
                        <div className="col-xl-3 col-sm-6" key={item._id}>
                            <div className="card">
                                <div className="card-body product-box">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <Link href={`/dashboard/products/${item._id}`}><img src={`/assets/images/upload/${item.img[0]}`} className="img-fluid bg-img" alt="" /></Link>
                                            <div className="product-hover">
                                                <ul>
                                                    <li><Link href={`/dashboard/products/edit/${item._id}`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                    <li>
                                                        <button className="btn" onClick={() => { setOpen(true); setDeleteId(item._id); }}><i className="ti-trash"></i></button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-detail">
                                        <Link href={`/dashboard/products/${item._id}`}><h6>{item.title}</h6></Link>
                                        <p>Ref: {item.prdcode}</p>
                                        <h4>${item.price}.00 <del>${item.oldprice}.00</del></h4>

                                        <p>Size: {item.size}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <DeleteModal open={open} setOpen={setOpen} delProduct={delProduct} deleteId={deleteId} setDeleteId={setDeleteId} />
        </div>
    )
}

export default ProductList