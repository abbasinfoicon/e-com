'use client'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const page = () => {
    return (
        <>
            <Breadcrumb title="Vendor Dashboard" />

            <section className="dashboard-section section-b-space">
                <Tabs>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3">
                                <div className="dashboard-sidebar">
                                    <div className="profile-top">
                                        <div className="profile-image">
                                            <img src="../assets/images/logos/17.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="profile-detail">
                                            <h5>Fashion Store</h5>
                                            <h6>750 followers | 10 review</h6>
                                            <h6>mark.enderess@mail.com</h6>
                                        </div>
                                    </div>

                                    <div className="faq-tab">
                                        <TabList>
                                            <Tab>Dashboard</Tab>
                                            <Tab>Products</Tab>
                                            <Tab>Order</Tab>
                                            <Tab>Profile</Tab>
                                            <Tab>Settings</Tab>
                                            <li className="ps-3"><Link href="/login" className='nav-link'>Log Out</Link></li>
                                        </TabList>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="faq-content">
                                    <TabPanel>
                                        <div className="counter-section">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="counter-box">
                                                        <img src="../assets/images/icon/dashboard/order.png" className="img-fluid" />
                                                        <div>
                                                            <h3>25</h3>
                                                            <h5>total products</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="counter-box">
                                                        <img src="../assets/images/icon/dashboard/sale.png" className="img-fluid" />
                                                        <div>
                                                            <h3>12500</h3>
                                                            <h5>total sales</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="counter-box">
                                                        <img src="../assets/images/icon/dashboard/homework.png" className="img-fluid" />
                                                        <div>
                                                            <h3>50</h3>
                                                            <h5>order pending</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div id="chart"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div id="chart-order"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="card dashboard-table">
                                                    <div className="card-body">
                                                        <h3>trending products</h3>
                                                        <table className="table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">image</th>
                                                                    <th scope="col">product name</th>
                                                                    <th scope="col">price</th>
                                                                    <th scope="col">sales</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row"><img
                                                                        src="../assets/images/dashboard/product/1.jpg"
                                                                        className="" /></th>
                                                                    <td>neck velvet dress</td>
                                                                    <td>$205</td>
                                                                    <td>1000</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><img
                                                                        src="../assets/images/dashboard/product/9.jpg"
                                                                        className="" /></th>
                                                                    <td>belted trench coat</td>
                                                                    <td>$350</td>
                                                                    <td>800</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><img src="../assets/images/pro3/34.jpg"
                                                                        className="" /></th>
                                                                    <td>man print tee</td>
                                                                    <td>$150</td>
                                                                    <td>750</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="card dashboard-table">
                                                    <div className="card-body">
                                                        <h3>recent orders</h3>
                                                        <table className="table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">order id</th>
                                                                    <th scope="col">product details</th>
                                                                    <th scope="col">status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">#21515</th>
                                                                    <td>neck velvet dress</td>
                                                                    <td><span
                                                                        className="badge rounded-pill bg-success-10 text-success custom-badge">shipped</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">#78153</th>
                                                                    <td>belted trench coat</td>
                                                                    <td><span
                                                                        className="badge rounded-pill bg-danger-10 text-danger custom-badge">pending</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">#51512</th>
                                                                    <td>man print tee</td>
                                                                    <td><span
                                                                        className="badge rounded-pill bg-secondary-10 text-secondary custom-badge">cancelled</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">#78153</th>
                                                                    <td>belted trench coat</td>
                                                                    <td><span
                                                                        className="badge rounded-pill bg-danger-10 text-danger custom-badge">pending</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">#51512</th>
                                                                    <td>man print tee</td>
                                                                    <td><span
                                                                        className="badge rounded-pill bg-success-10 text-success custom-badge">shipped</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card dashboard-table mt-0">
                                                    <div className="card-body">
                                                        <div className="top-sec">
                                                            <h3>all products</h3>
                                                            <Link href="#" className="btn btn-sm btn-solid">+ add new</Link>
                                                        </div>
                                                        <div className="table-responsive-md">
                                                            <table className="table mb-0 product-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">image</th>
                                                                        <th scope="col">product name</th>
                                                                        <th scope="col">category</th>
                                                                        <th scope="col">price</th>
                                                                        <th scope="col">stock</th>
                                                                        <th scope="col">sales</th>
                                                                        <th scope="col">edit/delete</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row"><img
                                                                            src="../assets/images/dashboard/product/1.jpg"
                                                                            className="" /></th>
                                                                        <td>neck velvet dress</td>
                                                                        <td>women clothes</td>
                                                                        <td className="fw-bold text-theme">$205</td>
                                                                        <td>1000</td>
                                                                        <td>2000</td>
                                                                        <td>
                                                                            <Link href="#"><i className="fa fa-pencil-square-o me-1"
                                                                                aria-hidden="true"></i>
                                                                            </Link><Link href="#"><i
                                                                                className="fa fa-trash-o ms-1 text-theme"
                                                                                aria-hidden="true"></i></Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row"><img
                                                                            src="../assets/images/dashboard/product/9.jpg"
                                                                            className="" /></th>
                                                                        <td>belted trench coat</td>
                                                                        <td>women clothes</td>
                                                                        <td className="fw-bold text-theme">$350</td>
                                                                        <td>800</td>
                                                                        <td>350</td>
                                                                        <td>
                                                                            <Link href="#"><i className="fa fa-pencil-square-o me-1"
                                                                                aria-hidden="true"></i>
                                                                            </Link><Link href="#"><i
                                                                                className="fa fa-trash-o ms-1 text-theme"
                                                                                aria-hidden="true"></i></Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row"><img src="../assets/images/pro3/34.jpg"
                                                                            className="" /></th>
                                                                        <td>men print tee</td>
                                                                        <td>men clothes</td>
                                                                        <td className="fw-bold text-theme">$150</td>
                                                                        <td>750</td>
                                                                        <td>150</td>
                                                                        <td>
                                                                            <Link href="#"><i className="fa fa-pencil-square-o me-1"
                                                                                aria-hidden="true"></i>
                                                                            </Link><Link href="#"><i
                                                                                className="fa fa-trash-o ms-1 text-theme"
                                                                                aria-hidden="true"></i></Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row"><img src="../assets/images/pro3/1.jpg"
                                                                            className="" /></th>
                                                                        <td>woman print tee</td>
                                                                        <td>women clothes</td>
                                                                        <td className="fw-bold text-theme">$150</td>
                                                                        <td>750</td>
                                                                        <td>150</td>
                                                                        <td>
                                                                            <Link href="#"><i className="fa fa-pencil-square-o me-1"
                                                                                aria-hidden="true"></i>
                                                                            </Link><Link href="#"><i
                                                                                className="fa fa-trash-o ms-1 text-theme"
                                                                                aria-hidden="true"></i></Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row"><img src="../assets/images/pro3/27.jpg"
                                                                            className="" /></th>
                                                                        <td>men print tee</td>
                                                                        <td>men clothes</td>
                                                                        <td className="fw-bold text-theme">$150</td>
                                                                        <td>750</td>
                                                                        <td>150</td>
                                                                        <td>
                                                                            <Link href="#"><i className="fa fa-pencil-square-o me-1"
                                                                                aria-hidden="true"></i>
                                                                            </Link><Link href="#"><i
                                                                                className="fa fa-trash-o ms-1 text-theme"
                                                                                aria-hidden="true"></i></Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row"><img src="../assets/images/pro3/36.jpg"
                                                                            className="" /></th>
                                                                        <td>men print tee</td>
                                                                        <td>men clothes</td>
                                                                        <td className="fw-bold text-theme">$150</td>
                                                                        <td>750</td>
                                                                        <td>150</td>
                                                                        <td>
                                                                            <Link href="#"><i className="fa fa-pencil-square-o me-1"
                                                                                aria-hidden="true"></i>
                                                                            </Link><Link href="#"><i
                                                                                className="fa fa-trash-o ms-1 text-theme"
                                                                                aria-hidden="true"></i></Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card dashboard-table mt-0">
                                                    <div className="card-body">
                                                        <div className="top-sec">
                                                            <h3>orders</h3>
                                                            <Link href="#" className="btn btn-sm btn-solid">add product</Link>
                                                        </div>
                                                        <div className="table-responsive-sm">
                                                            <table className="table mb-0 order-table-vendor">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">order id</th>
                                                                        <th scope="col">product details</th>
                                                                        <th scope="col">status</th>
                                                                        <th scope="col">price</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">#125021</th>
                                                                        <td>neck velvet dress</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-success-10 text-success custom-badge">shipped</span>
                                                                        </td>
                                                                        <td>$205</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#521214</th>
                                                                        <td>belted trench coat</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-success-10 text-success custom-badge">shipped</span>
                                                                        </td>
                                                                        <td>$350</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#521021</th>
                                                                        <td>men print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-danger-10 text-danger custom-badge">pending</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#245021</th>
                                                                        <td>woman print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-success-10 text-success custom-badge">shipped</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#122141</th>
                                                                        <td>men print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-secondary-10 text-secondary custom-badge">shipped</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#125015</th>
                                                                        <td>men print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-danger-10 text-danger custom-badge">pending</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#245021</th>
                                                                        <td>woman print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-success-10 text-success custom-badge">shipped</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#122141</th>
                                                                        <td>men print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-secondary-10 text-secondary custom-badge">cancelled</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">#125015</th>
                                                                        <td>men print tee</td>
                                                                        <td><span
                                                                            className="badge rounded-pill bg-danger-10 text-danger custom-badge">pending</span>
                                                                        </td>
                                                                        <td>$150</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card mt-0">
                                                    <div className="card-body">
                                                        <div className="dashboard-box">
                                                            <div className="dashboard-title">
                                                                <h4>profile</h4>
                                                                <span data-toggle="modal" data-bs-target="#edit-profile">edit</span>
                                                            </div>
                                                            <div className="dashboard-detail">
                                                                <ul>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>company name</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>Fashion Store</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>email address</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>mark.enderess@mail.com</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>Country / Region</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>Downers Grove, IL</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>Year Established</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>2018</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>Total Employees</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>101 - 200 People</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>category</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>clothing</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>street address</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>549 Sulphur Springs Road</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>city/state</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>Downers Grove, IL</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="details">
                                                                            <div className="left">
                                                                                <h6>zip</h6>
                                                                            </div>
                                                                            <div className="right">
                                                                                <h6>60515</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card mt-0">
                                                    <div className="card-body">
                                                        <div className="dashboard-box">
                                                            <div className="dashboard-title">
                                                                <h4>settings</h4>
                                                            </div>
                                                            <div className="dashboard-detail">
                                                                <div className="account-setting">
                                                                    <h5>Notifications</h5>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios"
                                                                                    id="exampleRadios1" value="option1" checked />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios1">
                                                                                    Allow Desktop Notifications
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios"
                                                                                    id="exampleRadios2" value="option2" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios2">
                                                                                    Enable Notifications
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios"
                                                                                    id="exampleRadios3" value="option3" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios3">
                                                                                    Get notification for my own activity
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios"
                                                                                    id="exampleRadios4" value="option4" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios4">
                                                                                    DND
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="account-setting">
                                                                    <h5>deactivate account</h5>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios1"
                                                                                    id="exampleRadios4" value="option4" checked />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios4">
                                                                                    I have a privacy concern
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios1"
                                                                                    id="exampleRadios5" value="option5" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios5">
                                                                                    This is temporary
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios1"
                                                                                    id="exampleRadios6" value="option6" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios6">
                                                                                    other
                                                                                </label>
                                                                            </div>
                                                                            <button type="button"
                                                                                className="btn btn-solid btn-xs">Deactivate
                                                                                Account</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="account-setting">
                                                                    <h5>Delete account</h5>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios3"
                                                                                    id="exampleRadios7" value="option7" checked />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios7">
                                                                                    No longer usable
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios3"
                                                                                    id="exampleRadios8" value="option8" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios8">
                                                                                    Want to switch on other account
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="radio_animated form-check-input"
                                                                                    type="radio" name="exampleRadios3"
                                                                                    id="exampleRadios9" value="option9" />
                                                                                <label className="form-check-label"
                                                                                    for="exampleRadios9">
                                                                                    other
                                                                                </label>
                                                                            </div>
                                                                            <button type="button"
                                                                                className="btn btn-solid btn-xs">Delete Account</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>

                        </div>
                    </div>
                </Tabs>
            </section>
        </>
    )
}

export default page