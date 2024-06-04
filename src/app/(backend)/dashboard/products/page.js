import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Products = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Product List" subtitle="Multikart Admin panel" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <form className="form-inline search-form search-box">
                                    <div className="form-group">
                                        <input className="form-control-plaintext" type="search" placeholder="Search.." />
                                    </div>
                                </form>
                                <Link href='/dashboard/products/add' className="btn btn-primary add-row mt-md-0 mt-2">Add Product</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row products-admin ratio_asos">
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href={`/dashboard/products/1`}><img src="/assets/images/pro3/34.jpg" className="img-fluid bg-img" alt="" /></Link>
                                        <div className="product-hover">
                                            <ul>
                                                <li><Link href={`/dashboard/products/edit/1`} className="btn"><i className="ti-pencil-alt"></i></Link></li>
                                                <li><button className="btn"><i className="ti-trash"></i></button></li>
                                            </ul>
                                        </div>
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
                                    <Link href={`/dashboard/products/1`}><h6>Slim Fit Cotton Shirt</h6></Link>
                                    <h4>$500.00 <del>$600.00</del></h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products