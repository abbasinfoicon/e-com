import { getProduct, getSingleProduct } from '@/actions/prdtAction'
import Breadcrumb from '@/components/Breadcrumb'
import { SingleProductSlider } from '@/components/Sliders'
import Link from 'next/link'
import React from 'react'
import ProductDescription from './ProductDescription'

const ProductDetails = async ({ params }) => {
    const { id } = params;
    const data = await getSingleProduct(id);
    const relatedProduct = await getProduct();

    const CDP = (oldPrice, newPrice) => {
        const discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return Math.round(discount);
    };

    return (
        <>
            <Breadcrumb title={data.title} parent="Products" parentLink="products" />

            <section>
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <SingleProductSlider data={data} />
                            </div>

                            <div className="col-lg-6 rtl-text">
                                <div className="product-right">
                                    <div className="product-count">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/fire.gif" className="img-fluid" alt="image" />
                                                <span className="p-counter">37</span>
                                                <span className="lang">orders in last 24 hours</span>
                                            </li>
                                            <li>
                                                <img src="/assets/images/person.gif" className="img-fluid user_img" alt="image" />
                                                <span className="p-counter">44</span>
                                                <span className="lang">active view this</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>{data.title}</h2>

                                    <div className="rating-section">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <h6>120 ratings</h6>
                                    </div>

                                    <div className="label-section">
                                        <span className="badge badge-grey-color">{data.prdcode} </span>
                                        <span className="label-text">BRAND: {data.brand}</span>
                                    </div>

                                    <h3 className="price-detail">${data.price}.00 <del>${data.oldprice}.00</del><span>{CDP(data.oldprice, data.price)}% off</span></h3>

                                    <ul className="color-variant">
                                        {
                                            data.colors.map((item, index) => (
                                                item && <li key={index} style={{ backgroundColor: item }}></li>
                                            ))
                                        }
                                    </ul>

                                    <div id="selectSize" className="addeffect-section product-description border-product">
                                        <h6 className="product-title size-text">select size <span><Link href="#">size chart</Link></span></h6>
                                        <div className="modal fade">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Sheer
                                                            Straight Kurta</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    </div>
                                                    <div className="modal-body"><img src="/assets/images/size-chart.jpg" alt=""
                                                        className="img-fluid" /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <h6 className="error-message">please select size</h6>
                                        <select name="" id="" className="form-control mb-3">
                                            <option value="">select size</option>
                                            {
                                                data.size.map((item, index) => (
                                                    item && <option key={index} defaultValue={item}>{item}</option>
                                                ))
                                            }
                                        </select>

                                        <h6 className="product-title">quantity</h6>
                                        <div className="qty-box">
                                            <div className="input-group">
                                                <input type="number" name="quantity" className="form-control input-number" defaultValue={1} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-buttons">
                                        <Link href="#" id="cartEffect" className="btn btn-solid hover-solid btn-animation">
                                            <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> add to cart
                                        </Link>
                                        <Link href="#" className="btn btn-solid">
                                            <i className="fa fa-bookmark fz-16 me-2" aria-hidden="true"></i>wishlist
                                        </Link>
                                    </div>

                                    <div className="product-count">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/icon/truck.png" className="img-fluid" alt="image" />
                                                <span className="lang">Free shipping for orders above $5 USD</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="border-product">
                                        <h6 className="product-title">Sales Ends In</h6>
                                        <div className="timer">
                                            <p id="demo">
                                                <span>0<span className="padding-l">:</span>
                                                    <span className="timer-cal">Days</span></span>
                                                <span>23<span className="padding-l">:</span>
                                                    <span className="timer-cal">Hrs</span>
                                                </span><span>8<span className="padding-l">:</span>
                                                    <span className="timer-cal">Min</span></span>
                                                <span>11<span className="timer-cal">Sec</span></span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-product">
                                        <h6 className="product-title">shipping info</h6>
                                        <ul className="shipping-info">
                                            <li>100% Original Products</li>
                                            <li>Free Delivery on order above Rs. 799</li>
                                            <li>Pay on delivery is available</li>
                                            <li>Easy 30 days returns and exchanges</li>
                                        </ul>
                                    </div>

                                    <div className="border-product">
                                        <h6 className="product-title">share it</h6>
                                        <div className="product-icon">
                                            <ul className="product-social">
                                                <li><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-rss"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border-product">
                                        <h6 className="product-title">100% secure payment</h6>
                                        <img src="/assets/images/payment.png" className="img-fluid mt-1" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tab-product m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <ProductDescription data={data} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space ratio_asos">
                <div className="container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>
                    <div className="row search-product">
                        {
                            relatedProduct.map((item, index) => {
                                return (
                                    <div className="col-xl-2 col-md-4 col-6" key={index}>
                                        <div className="product-box">
                                            <div className="img-wrapper">
                                                <div className="front">
                                                    {
                                                        item.img.slice(0, 1).map((item, index) => (
                                                            <img src={`/assets/images/upload/${item}`} alt="" key={index} className="img-fluid" />
                                                        ))
                                                    }
                                                </div>
                                                <div className="back">
                                                    {
                                                        item.img.slice(1, 2).map((item, index) => (
                                                            <img src={`/assets/images/upload/${item}`} alt="" key={index} className="img-fluid" />
                                                        ))
                                                    }
                                                </div>

                                                <div className="cart-info cart-wrap">
                                                    <button title="Add to cart"><i className="ti-shopping-cart"></i></button>
                                                    <Link href="#" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link>
                                                    <Link href="#" title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                    <Link href="/compare" title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>

                                            <div className="product-detail">
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
                                                <ul className="color-variant">
                                                    {
                                                        item.colors.map((item, index) => (
                                                            item && <li key={index} style={{ backgroundColor: item }}></li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails