'use client'
import Pagination from '@/components/Pagination';
import { addToCart } from '@/lib/features/cartSlice';
import { addToWishlist } from '@/lib/features/wishlistSlice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProductLists = ({ data }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector((state) => state.user.data);
    const [list, setList] = useState(false);
    const [layout, setLayout] = useState('grid4');
    const [productsPerPage, setProductsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('Sorting items');
    const [active, setActive] = useState(false);

    const layoutClasses = {
        grid2: 'col-lg-6',
        grid3: 'col-lg-4 col-6',
        grid4: 'col-lg-3 col-6',
        grid6: 'col-lg-2'
    };

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page on sorting change
    }, [sortOption]);

    const handleLayoutChange = (layoutType) => {
        setLayout(layoutType);
        setList(false);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortOption === 'Low to High') {
            return a.price - b.price;
        } else if (sortOption === 'High to Low') {
            return b.price - a.price;
        }
        return 0;
    });

    const totalPages = Math.ceil(sortedData.length / productsPerPage);

    const currentProducts = sortedData.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleProductsPerPageChange = (event) => {
        setProductsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    };

    const handleAddToCart = (product) => {
        if (user?._id) {
            dispatch(addToCart(product));
            toast.success('Add to Cart!');
        } else {
            router.push('/login');
        }
    };

    const handleAddToWishlist = (product) => {
        if (user?.id) {
            dispatch(addToWishlist(product));
            toast.success('Added to Wishlist!');
            setActive(true);
        } else {
            router.push('/login');
        }
    };

    return (
        <div className="collection-product-wrapper">
            <div className="product-top-filter">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="filter-main-btn">
                            <span className="filter-btn btn btn-theme">
                                <i className="fa fa-filter"></i> Filter
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="product-filter-content">
                            <div className="search-count">
                                <h5>Showing Products {((currentPage - 1) * productsPerPage) + 1}-{Math.min(currentPage * productsPerPage, sortedData.length)} of {sortedData.length} Result</h5>
                            </div>

                            <div className="collection-view">
                                <ul>
                                    <li onClick={() => setList(false)}><i className="fa fa-th grid-layout-view"></i></li>
                                    <li onClick={() => setList(true)}><i className="fa fa-list-ul list-layout-view"></i></li>
                                </ul>
                            </div>

                            <div className={`collection-grid-view ${list && 'opacity-0'}`}>
                                <ul>
                                    <li onClick={() => handleLayoutChange('grid2')}><img src="/assets/images/icon/2.png" alt="" className="product-2-layout-view" /></li>
                                    <li onClick={() => handleLayoutChange('grid3')}><img src="/assets/images/icon/3.png" alt="" className="product-3-layout-view" /></li>
                                    <li onClick={() => handleLayoutChange('grid4')}><img src="/assets/images/icon/4.png" alt="" className="product-4-layout-view" /></li>
                                    <li onClick={() => handleLayoutChange('grid6')}><img src="/assets/images/icon/6.png" alt="" className="product-6-layout-view" /></li>
                                </ul>
                            </div>

                            <div className="product-page-per-view">
                                <select onChange={handleProductsPerPageChange}>
                                    <option value={12}>12 Products Per Page</option>
                                    <option value={24}>24 Products Per Page</option>
                                    <option value={50}>50 Products Per Page</option>
                                </select>
                            </div>

                            <div className="product-page-filter">
                                <select className='filterBySort' value={sortOption} onChange={handleSortChange}>
                                    <option value="Sorting items">Sorting items</option>
                                    <option value="Low to High">Low to High</option>
                                    <option value="High to Low">High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`product-wrapper-grid ${list ? 'list-view' : 'grid-view'}`}>
                <div className="row margin-res">
                    {
                        currentProducts.length > 0 ? currentProducts.map((item, index) => (
                            <div key={index} className={`${list ? 'col-lg-12' : layoutClasses[layout]}`}>
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
                                            <button className="p_btn" title="Add to cart" onClick={() => handleAddToCart(item)}><i className="ti-shopping-cart"></i></button>
                                            <button className={`p_btn ${active ? 'active' : ''}`} title="Add to Wishlist" onClick={() => handleAddToWishlist(item)}><i className="ti-heart"></i></button>
                                            <button className="p_btn" title="Quick View"><i className="ti-search"></i></button>
                                            <button className="p_btn" title="Compare"><i className="ti-reload"></i></button>
                                        </div>
                                    </div>

                                    <div className="product-detail">
                                        <div>
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

                                            <p className="description-short" dangerouslySetInnerHTML={{ __html: item.description }}></p>

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
                            </div>
                        )) : <p className='notFound'>Product not found!!</p>
                    }
                </div>
            </div>

            <div className="product-pagination">
                <div className="theme-paggination-block">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        </div>

                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="product-search-count-bottom">
                                <h5>Showing Products {((currentPage - 1) * productsPerPage) + 1}-{Math.min(currentPage * productsPerPage, sortedData.length)} of {sortedData.length} Result</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductLists