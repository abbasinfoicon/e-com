import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const Review = () => {
    return (
        <div className="page-body">            
            <Breadcrumb title="Product Review" subtitle="Multikart Admin panel" parent="products" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <form className="form-inline search-form search-box">
                                    <div className="form-group">
                                        <input className="form-control-plaintext" type="search" placeholder="Search.."/>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="card-body">
                                <div>
                                    <div className="table-responsive table-desi">
                                        <table className="review-table table all-package">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Customer Name</th>
                                                    <th>Product Name</th>
                                                    <th>Rating</th>
                                                    <th>Comment</th>
                                                    <th>Published</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>Maureen Biologist</td>
                                                    <td>Outwear & Coats</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>02</td>
                                                    <td>Caroline Harris</td>
                                                    <td>Slim Fit Plastic Coat</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03</td>
                                                    <td>Lucy Morile</td>
                                                    <td>Men's Sweatshirt</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>04</td>
                                                    <td>Jennifer Straight</td>
                                                    <td>Men's Hoodie t-shirt</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-cross">
                                                        <i data-feather="x-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>05</td>
                                                    <td>Kevin Millett</td>
                                                    <td>Outwear & Coats</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>06</td>
                                                    <td>czxc</td>
                                                    <td>Slim Fit Plastic Coat</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-cross">
                                                        <i data-feather="x-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>07</td>
                                                    <td>Kevin Millett</td>
                                                    <td>Men's Sweatshirt</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-cross">
                                                        <i data-feather="x-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08</td>
                                                    <td>Dillon Bradshaw</td>
                                                    <td>Men's Hoodie t-shirt</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>09</td>
                                                    <td>Lorna Bonner</td>
                                                    <td>Outwear & Coats</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-cross">
                                                        <i data-feather="x-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Richard Johnson</td>
                                                    <td>Slim Fit Plastic Coat </td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>Lorraine McDowell</td>
                                                    <td>Men's Sweatshirt</td>
                                                    <td>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>The Product is No Longer Needed</td>
                                                    <td className="td-check">
                                                        <i data-feather="check-circle"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review