'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Filters from './Filters'
import ProductLists from './ProductLists'

const ClientPage = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterUpdate = (updatedData) => {
        setFilteredData(updatedData);
    };

    return (
        <div className="row">
            <div className="col-sm-3 collection-filter">
                <Filters data={data} onFilterUpdate={handleFilterUpdate} />

                <div className="theme-card">
                    <h5 className="title-border">new product</h5>
                    <div className="offer-slider slide-1">
                        <div>
                            {
                                data.slice(0, 3).map((item, index) => {
                                    return (
                                        <div className="media" key={index}>
                                            <Link href={`/products/${item._id}`}>
                                                {
                                                    item.img.slice(0, 1).map((item, i) => {
                                                        return <img src={`/assets/images/upload/${item}`} alt="product" className="img-fluid" key={i} />
                                                    })
                                                }
                                            </Link>

                                            <div className="media-body align-self-center">
                                                <div className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>

                                                <Link href={`/products/${item._id}`}>
                                                    <h6>{item.title}</h6>
                                                </Link>
                                                <h4>${item.price}.00</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="collection-sidebar-banner">
                    <Link href="/products/1"><img src="/assets/images/side-banner.png" className="img-fluid"
                        alt="" /></Link>
                </div>
            </div>

            <div className="collection-content col">
                <div className="page-main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="top-banner-wrapper">
                                <Link href="/products/1"><img src="/assets/images/mega-menu/2.jpg"
                                    className="img-fluid" alt="" /></Link>
                                <div className="top-banner-content small-section">
                                    <h4>BIGGEST DEALS ON TOP BRANDS</h4>
                                    <p>The trick to choosing the best wear for yourself is to keep in mind your
                                        body type, individual style, occasion and also the time of day or
                                        weather.
                                        In addition to eye-catching products from top brands, we also offer an
                                        easy 30-day return and exchange policy, free and fast shipping across
                                        all pin codes, cash or card on delivery option, deals and discounts,
                                        among other perks. So, sign up now and shop for westarn wear to your
                                        heart’s content on Multikart. </p>
                                </div>
                            </div>

                            <ProductLists data={filteredData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientPage