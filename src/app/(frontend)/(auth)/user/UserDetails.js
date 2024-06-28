'use client'
import { logoutUser } from '@/actions/userAction'
import Logout from '@/components/Logout'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify'

const UserDetails = ({ userData, changePassword, changeContent }) => {
    const user = useSelector((state) => state.user.data);
    const [data, setData] = useState("");
    const [modalType, setModalType] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const filterData = userData.filter((item) => item._id === user?._id);
        setData(filterData[0]);
    }, [])

    const handleOpenModal = (e, type) => {
        e.preventDefault();
        setModalType(type);
    };

    const handleCloseModal = () => setModalType(null);

    const handleChange = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        formData.append("id", user?._id);

        let res;

        if (modalType === 'password') {
            res = await changePassword(formData);
        } else if (modalType === 'contact') {
            res = await changeContent(formData);
        }

        if (res && (res.status === 201 || res.status === 202)) {
            toast.success(res.message);
            handleCloseModal();
        } else {
            toast.error(res.message);
        }

        setLoading(false);
    };

    const modalContent = {
        password: {
            title: "Change Password",
            fields: [
                { name: "password", placeholder: "Enter old password", type: "password", value: '' },
                { name: "newpassword", placeholder: "Enter New password", type: "password", value: '' },
                { name: "cnewpassword", placeholder: "Enter confirm new password", type: "password", value: '' }
            ]
        },
        contact: {
            title: "Change Contact",
            fields: [
                { name: "fname", placeholder: "Enter First Name", type: "text", value: data.fname },
                { name: "lname", placeholder: "Enter Last Name", type: "text", value: data.lname },
                { name: "email", placeholder: "Enter Email", type: "email", value: data.email },
                { name: "mobile", placeholder: "Enter Mobile No", type: "tel", value: data.mobile }
            ]
        }
    };

    return (
        <Tabs>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="dashboard-sidebar">
                            <div className="profile-top">
                                <div className="profile-image">
                                    <img src={data.img ? "/assets/images/upload/" + data.img : "/assets/images/avtar.jpg"} alt="" className="img-fluid" />
                                </div>
                                <div className="profile-detail">
                                    <h5>{data.fname} {data.lname}</h5>
                                    <h6>{data.email}</h6>
                                </div>
                            </div>
                            <div className="faq-tab">

                                <TabList>
                                    <Tab>Account Info</Tab>
                                    <Tab>Profile</Tab>
                                    <Tab>Address Book</Tab>
                                    <Tab>My Orders</Tab>
                                    <Tab>My Wishlist</Tab>
                                    <Tab>Saved Cards</Tab>
                                    <Tab>Security</Tab>
                                    <li className="ps-3"><Logout logoutUser={logoutUser} /></li>
                                </TabList>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="faq-content">

                            <TabPanel>
                                <div className="counter-section">
                                    <div className="welcome-msg">
                                        <h4>Hello, {data.fname} {data.lname} !</h4>
                                        <p>From your My Account Dashboard you have the ability to view a snapshot of your
                                            recent
                                            account activity and update your account information. Select a link below to
                                            view or
                                            edit information.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="counter-box">
                                                <img src="/assets/images/icon/dashboard/sale.png" className="img-fluid" />
                                                <div>
                                                    <h3>0</h3>
                                                    <h5>Total Order</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="counter-box">
                                                <img src="/assets/images/icon/dashboard/homework.png" className="img-fluid" />
                                                <div>
                                                    <h3>0</h3>
                                                    <h5>Pending Orders</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="counter-box">
                                                <img src="/assets/images/icon/dashboard/order.png" className="img-fluid" />
                                                <div>
                                                    <h3>0</h3>
                                                    <h5>Wishlist</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box-account box-info">
                                        <div className="box-head">
                                            <h4>Account Information</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Contact Information</h3><button onClick={(e) => handleOpenModal(e, 'contact')} className='btn-edit'>Edit</button>
                                                    </div>
                                                    <div className="box-content">
                                                        <h6>{data.fname} {data.lname}</h6>
                                                        <h6>{data.mobile}</h6>
                                                        <h6>{data.email}</h6>
                                                        <h6><button onClick={(e) => handleOpenModal(e, 'password')} className='btn-edit'>Change Password</button></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box mt-3">
                                            <div className="box-title">
                                                <h3>Address Book</h3>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h6>Default Address</h6>
                                                    <address>{data.address}<br />{data.city}<br />{data.state}<br />{data.zip}<br />
                                                        <Link href="#">Edit Address</Link></address>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h6>Shipping Address</h6>
                                                    <address>{data.address}<br />{data.city}<br />{data.state}<br />{data.zip}<br />
                                                        <Link href="#">Edit Address</Link></address>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {modalType && (
                                        <Modal open={true} onClose={handleCloseModal}>
                                            <div className="form">
                                                <div className="modal-header">
                                                    <h3>{modalContent[modalType].title}</h3>
                                                </div>

                                                <div className="modal-body">
                                                    <form onSubmit={handleChange}>
                                                        {modalContent[modalType].fields.map((field, index) => (
                                                            <input key={index} type={field.type} className='form-control' name={field.name} placeholder={field.placeholder} defaultValue={field.value} />
                                                        ))}
                                                        <button type="submit" className="btn btn-solid">
                                                            {loading ? 'Updating...' : 'Update'}
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Modal>
                                    )}
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
                                                        <Link className="edit-link" href="#">edit</Link>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <ul>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>user name</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.fname} {data.lname}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>email address</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.email}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Country / Region</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.country}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Address</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.address}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>city</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.city}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>state</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.state}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>zip</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.zip}</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="dashboard-title mt-lg-5 mt-3">
                                                        <h4>login details</h4>
                                                        <Link className="edit-link" href="#">edit</Link>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <ul>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Email Address</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.email} <Link className="edit-link" href="#">edit</Link></h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Phone No.</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>{data.mobile}<Link className="edit-link" href="#">Edit</Link></h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Password</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>******* <Link className="edit-link" href="#">Edit</Link></h6>
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
                                                <div className="top-sec">
                                                    <h3>Address Book</h3>
                                                    <Link href="#" className="btn btn-sm btn-solid">+ add new</Link>
                                                </div>
                                                <div className="address-book-section">
                                                    <div className="row g-4">
                                                        <div className="select-box active col-xl-4 col-md-6">
                                                            <div className="address-box">
                                                                <div className="top">
                                                                    <h6>{data.fname} {data.lname} <span>home</span></h6>
                                                                </div>
                                                                <div className="middle">
                                                                    <div className="address">
                                                                        <p>{data.address}</p>
                                                                        <p>{data.city}</p>
                                                                        <p>{data.state}</p>
                                                                        <p>{data.zip}</p>
                                                                    </div>
                                                                    <div className="number">
                                                                        <p>mobile: <span>{data.mobile}</span></p>
                                                                        <p>email: <span>{data.email}</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="bottom">
                                                                    <Link href="#" className="bottom_btn">edit</Link>
                                                                    <Link href="#" className="bottom_btn">remove</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="select-box col-xl-4 col-md-6">
                                                            <div className="address-box">
                                                                <div className="top">
                                                                    <h6>{data.fname} {data.lname} <span>office</span></h6>
                                                                </div>
                                                                <div className="middle">
                                                                    <div className="address">
                                                                        <p>{data.address}</p>
                                                                        <p>{data.city}</p>
                                                                        <p>{data.state}</p>
                                                                        <p>{data.zip}</p>
                                                                    </div>
                                                                    <div className="number">
                                                                        <p>mobile: <span>{data.mobile}</span></p>
                                                                        <p>email: <span>{data.email}</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="bottom">
                                                                    <Link href="#" className="bottom_btn">edit</Link>
                                                                    <Link href="#" className="bottom_btn">remove</Link>
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

                            <TabPanel>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card dashboard-table mt-0">
                                            <div className="card-body table-responsive-sm">
                                                <div className="top-sec">
                                                    <h3>My Orders</h3>
                                                </div>
                                                <div className="table-responsive-xl">
                                                    <table className="table cart-table order-table">
                                                        <thead>
                                                            <tr className="table-head">
                                                                <th scope="col">image</th>
                                                                <th scope="col">Order Id</th>
                                                                <th scope="col">Product Details</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/1.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span className="mt-0">#125021</span>
                                                                </td>
                                                                <td>
                                                                    <span className="fs-6">Purple polo tshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className="badge rounded-pill bg-success custom-badge">Shipped</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#">
                                                                        <i className="fa fa-eye text-theme"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/2.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span className="mt-0">#125367</span>
                                                                </td>
                                                                <td>
                                                                    <span className="fs-6">Sleevless white top</span>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className="badge rounded-pill bg-danger custom-badge">Pending</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#">
                                                                        <i className="fa fa-eye text-theme"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/27.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <p>#125948</p>
                                                                </td>
                                                                <td>
                                                                    <p className="fs-6">multi color polo tshirt</p>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className="badge rounded-pill bg-success custom-badge">Shipped</span>
                                                                </td>
                                                                <td>
                                                                    <p className="theme-color fs-6">$49.54</p>
                                                                </td>
                                                                <td>
                                                                    <Link href="#">
                                                                        <i className="fa fa-eye text-theme"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/28.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <p>#127569</p>
                                                                </td>
                                                                <td>
                                                                    <p className="fs-6">Candy red solid tshirt</p>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className="badge rounded-pill bg-success custom-badge">Shipped</span>
                                                                </td>
                                                                <td>
                                                                    <p className="theme-color fs-6">$49.54</p>
                                                                </td>
                                                                <td>
                                                                    <Link href="#">
                                                                        <i className="fa fa-eye text-theme"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/33.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <p>#125753</p>
                                                                </td>
                                                                <td>
                                                                    <p className="fs-6">multicolored polo tshirt</p>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className="badge rounded-pill bg-secondary custom-badge">Canceled</span>
                                                                </td>
                                                                <td>
                                                                    <p className="theme-color fs-6">$49.54</p>
                                                                </td>
                                                                <td>
                                                                    <Link href="#">
                                                                        <i className="fa fa-eye text-theme"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/34.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span>#125021</span>
                                                                </td>
                                                                <td>
                                                                    <span className="fs-6">Men's Sweatshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className="badge rounded-pill bg-secondary custom-badge">Canceled</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#">
                                                                        <i className="fa fa-eye text-theme"></i>
                                                                    </Link>
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
                                            <div className="card-body table-responsive-sm">
                                                <div className="top-sec">
                                                    <h3>My Wishlist</h3>
                                                </div>
                                                <div className="table-responsive-xl">
                                                    <table className="table cart-table wishlist-table">
                                                        <thead>
                                                            <tr className="table-head">
                                                                <th scope="col">image</th>
                                                                <th scope="col">Order Id</th>
                                                                <th scope="col">Product Details</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/1.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span className="mt-0">#125021</span>
                                                                </td>
                                                                <td>
                                                                    <span>Purple polo tshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#"
                                                                        className="btn btn-xs btn-solid">
                                                                        Move to Cart
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/2.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span className="mt-0">#125367</span>
                                                                </td>
                                                                <td>
                                                                    <span>Sleevless white top</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#"
                                                                        className="btn btn-xs btn-solid">
                                                                        Move to Cart
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/27.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span>#125948</span>
                                                                </td>
                                                                <td>
                                                                    <span>multi color polo tshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#"
                                                                        className="btn btn-xs btn-solid">
                                                                        Move to Cart
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/28.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span>#127569</span>
                                                                </td>
                                                                <td>
                                                                    <span>Candy red solid tshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#"
                                                                        className="btn btn-xs btn-solid">
                                                                        Move to Cart
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/33.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span>#125753</span>
                                                                </td>
                                                                <td>
                                                                    <span>multicolored polo tshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#"
                                                                        className="btn btn-xs btn-solid">
                                                                        Move to Cart
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <Link href="#">
                                                                        <img src="/assets/images/pro3/34.jpg"
                                                                            className="blur-up lazyloaded" alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span>#125021</span>
                                                                </td>
                                                                <td>
                                                                    <span>Men's Sweatshirt</span>
                                                                </td>
                                                                <td>
                                                                    <span className="theme-color fs-6">$49.54</span>
                                                                </td>
                                                                <td>
                                                                    <Link href="#"
                                                                        className="btn btn-xs btn-solid">
                                                                        Move to Cart
                                                                    </Link>
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
                                        <div className="card mt-0">
                                            <div className="card-body">
                                                <div className="top-sec">
                                                    <h3>Saved Cards</h3>
                                                    <Link href="#" className="btn btn-sm btn-solid">+ add new</Link>
                                                </div>

                                                <div className="address-book-section">
                                                    <div className="row g-4">
                                                        <div className="select-box active col-xl-4 col-md-6">
                                                            <div className="address-box">
                                                                <div className="bank-logo">
                                                                    <img src="/assets/images/bank-logo.png"
                                                                        className="bank-logo" />
                                                                    <img src="/assets/images/visa.png"
                                                                        className="network-logo" />
                                                                </div>
                                                                <div className="card-number">
                                                                    <h6>Card Number</h6>
                                                                    <h5>6262 6126 2112 1515</h5>
                                                                </div>
                                                                <div className="name-validity">
                                                                    <div className="left">
                                                                        <h6>name on card</h6>
                                                                        <h5>Mark Jecno</h5>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>validity</h6>
                                                                        <h5>XX/XX</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="bottom">
                                                                    <Link href="#" className="bottom_btn">edit</Link>
                                                                    <Link href="#" className="bottom_btn">remove</Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="select-box col-xl-4 col-md-6">
                                                            <div className="address-box">
                                                                <div className="bank-logo">
                                                                    <img src="/assets/images/bank-logo1.png"
                                                                        className="bank-logo" />
                                                                    <img src="/assets/images/visa.png"
                                                                        className="network-logo" />
                                                                </div>
                                                                <div className="card-number">
                                                                    <h6>Card Number</h6>
                                                                    <h5>6262 6126 2112 1515</h5>
                                                                </div>
                                                                <div className="name-validity">
                                                                    <div className="left">
                                                                        <h6>name on card</h6>
                                                                        <h5>Mark Jecno</h5>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>validity</h6>
                                                                        <h5>XX/XX</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="bottom">
                                                                    <Link href="#" className="bottom_btn">edit</Link>
                                                                    <Link href="#" className="bottom_btn">remove</Link>
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
                                                                            id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios1">
                                                                            Allow Desktop Notifications
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios2" defaultValue="option2" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios2">
                                                                            Enable Notifications
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios3" defaultValue="option3" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios3">
                                                                            Get notification for my own activity
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios4" defaultValue="option4" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios4">
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
                                                                            id="exampleRadios4" defaultValue="option4" defaultChecked />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios4">
                                                                            I have a privacy concern
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios1"
                                                                            id="exampleRadios5" defaultValue="option5" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios5">
                                                                            This is temporary
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios1"
                                                                            id="exampleRadios6" defaultValue="option6" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios6">
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
                                                                            id="exampleRadios7" defaultValue="option7" defaultChecked />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios7">
                                                                            No longer usable
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios3"
                                                                            id="exampleRadios8" defaultValue="option8" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios8">
                                                                            Want to switch on other account
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios3"
                                                                            id="exampleRadios9" defaultValue="option9" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="exampleRadios9">
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
    )
}

export default UserDetails