import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const OrderTrack = () => {
    return (
        <>
            <Breadcrumb title="Order Track" />

            <section className="tracking-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>status for order no: 54151548</h3>
                            <div className="row border-part">
                                <div className="col-xl-2 col-md-3 col-sm-4">
                                    <div className="product-detail">
                                        <img src="/assets/images/fashion/pro/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-sm-8">
                                    <div className="tracking-detail">
                                        <ul>
                                            <li>
                                                <div className="left">
                                                    <span>Order name</span>
                                                </div>
                                                <div className="right">
                                                    <span>Slim Fit Dress</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <span>customer number</span>
                                                </div>
                                                <div className="right">
                                                    <span>54151548</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <span>order date</span>
                                                </div>
                                                <div className="right">
                                                    <span>20 Nov 2020</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <span>Ship Date</span>
                                                </div>
                                                <div className="right">
                                                    <span>20 Nov 2020</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <span>shipping address</span>
                                                </div>
                                                <div className="right">
                                                    <span>2253 Short Street <br />Austin, TX<br />Texas, 78701</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <span>carrier</span>
                                                </div>
                                                <div className="right">
                                                    <span>FedEx</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <span>carrier tracking number</span>
                                                </div>
                                                <div className="right">
                                                    <span>656974541515484</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4">
                                    <div className="order-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55107.59629446948!2d-97.77629221286301!3d30.316123884942762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca7d7a2a6d0d%3A0x209a4c2782a39461!2sCentral%20Market!5e0!3m2!1sen!2sin!4v1607754725548!5m2!1sen!2sin"
                                            frameborder="0" allowfullscreen="" aria-hidden="false" ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="arrow-steps clearfix">
                                    <div className="step done"> <span> order placed</span> </div>
                                    <div className="step current"> <span>preparing to ship</span> </div>
                                    <div className="step"><span> shipped</span> </div>
                                    <div className="step"><span>delivered</span> </div>
                                </div>
                            </div>
                            <div className="order-table table-responsive-sm">
                                <table className="table mb-0 table-striped table-borderless">
                                    <thead className="">
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>20 Nov 2020</td>
                                            <td>12.00 AM</td>
                                            <td>shipped</td>
                                            <td>california</td>
                                        </tr>
                                        <tr>
                                            <td>20 Nov 2020</td>
                                            <td>12.00 AM</td>
                                            <td>shipping info received</td>
                                            <td>california</td>
                                        </tr>
                                        <tr>
                                            <td>20 Nov 2020</td>
                                            <td>12.00 AM</td>
                                            <td>origin scan</td>
                                            <td>california</td>
                                        </tr>
                                        <tr>
                                            <td>20 Nov 2020</td>
                                            <td>12.00 AM</td>
                                            <td>shipping info received</td>
                                            <td>california</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderTrack