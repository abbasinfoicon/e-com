import React from 'react'
import { BarChart, DoughnutChart, LineChart, PieChart, SingleLineChart } from '@/components/backend/Chart'
import Link from 'next/link'
import Breadcrumb from '@/components/backend/Breadcrumb'

const Dashboard = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="Dashboard" subtitle="Multikart Admin panel"/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="warning-box card-body">
                                <div className="media static-top-widget align-items-center">
                                    <div className="icons-widgets">
                                        <div className="align-self-center text-center">
                                            <i className="fa fa-location-arrow font-light"></i>
                                        </div>
                                    </div>
                                    <div className="media-body media-doller">
                                        <span className="m-0">Earnings</span>
                                        <h3 className="mb-0">$ <span className="counter">6659</span><small> This
                                            Month</small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="secondary-box card-body">
                                <div className="media static-top-widget align-items-center">
                                    <div className="icons-widgets">
                                        <div className="align-self-center text-center">
                                            <i className="fa fa-cube font-light"></i>
                                        </div>
                                    </div>
                                    <div className="media-body media-doller">
                                        <span className="m-0">Products</span>
                                        <h3 className="mb-0">$ <span className="counter">9856</span><small> This
                                            Month</small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="primary-box card-body">
                                <div className="media static-top-widget align-items-center">
                                    <div className="icons-widgets">
                                        <div className="align-self-center text-center">
                                            <i className="fa fa-comments-o  font-light"></i></div>
                                    </div>
                                    <div className="media-body media-doller"><span className="m-0">Messages</span>
                                        <h3 className="mb-0">$ <span className="counter">893</span><small> This
                                            Month</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="danger-box card-body">
                                <div className="media static-top-widget align-items-center">
                                    <div className="icons-widgets">
                                        <div className="align-self-center text-center">
                                            <i className="fa fa-users font-light"></i></div>
                                    </div>
                                    <div className="media-body media-doller"><span className="m-0">New Vendors</span>
                                        <h3 className="mb-0">$ <span className="counter">5631</span><small> This
                                            Month</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 xl-100">
                        <div className="card">
                            <div className="card-header">
                                <h5>Market Value</h5>
                            </div>
                            <div className="card-body">
                                <BarChart />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 xl-100">
                        <div className="card">
                            <div className="card-header">
                                <h5>Latest Orders</h5>
                            </div>
                            <div className="card-body">
                                <div className="user-status table-responsive latest-order-table">
                                    <table className="table table-bordernone">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Order Total</th>
                                                <th scope="col">Payment Method</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="digits">$120.00</td>
                                                <td className="font-danger">Bank Transfers</td>
                                                <td className="digits">On Way</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="digits">$90.00</td>
                                                <td className="font-secondary">Ewallets</td>
                                                <td className="digits">Delivered</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="digits">$240.00</td>
                                                <td className="font-warning">Cash</td>
                                                <td className="digits">Delivered</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="digits">$120.00</td>
                                                <td className="font-primary">Direct Deposit</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="digits">$50.00</td>
                                                <td className="font-primary">Bank Transfers</td>
                                                <td className="digits">Delivered</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Link href="/" className="btn btn-primary mt-4">View All Orders</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card order-graph sales-carousel">
                            <div className="card-header b-header">
                                <h6>Total Sales</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="small-chartjs">
                                            <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-3"></div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="value-graph">
                                            <h3>42% <span><i className="fa fa-angle-up font-primary"></i></span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <span>Sales Last Month</span>
                                        <h2 className="mb-0">9054</h2>
                                        <p>0.25% <span><i className="fa fa-angle-up"></i></span></p>
                                    </div>

                                    <div className="bg-primary b-r-8">
                                        <div className="small-box">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="sales-contain">
                                    <h5 className="f-w-600">Gross sales of August</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card order-graph sales-carousel">
                            <div className="card-header b-header">
                                <h6>Total purchase</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="small-chartjs">
                                            <div className="flot-chart-placeholder" id="simple-line-chart-sparkline">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="value-graph">
                                            <h3>20% <span><i className="fa fa-angle-up font-secondary"></i></span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <span>Monthly purchase</span>
                                        <h2 className="mb-0">2154</h2>
                                        <p>0.13% <span><i className="fa fa-angle-up"></i></span></p>
                                    </div>
                                    <div className="bg-secondary b-r-8">
                                        <div className="small-box">
                                            <i className="fa fa-credit-card"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="sales-contain">
                                    <h5 className="f-w-600">Avg Gross purchase</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card order-graph sales-carousel">
                            <div className="card-header b-header">
                                <h6>Total cash transaction</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="small-chartjs">
                                            <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="value-graph">
                                            <h3>28% <span><i className="fa fa-angle-up font-warning"></i></span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <span>Cash on hand</span>
                                        <h2 className="mb-0">4672</h2>
                                        <p>0.8% <span><i className="fa fa-angle-up"></i></span></p>
                                    </div>
                                    <div className="bg-warning b-r-8">
                                        <div className="small-box">
                                            <i className="fa fa-shopping-cart"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="sales-contain">
                                    <h5 className="f-w-600">Details about cash</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card order-graph sales-carousel">
                            <div className="card-header b-header">
                                <h6>Daily Deposits</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="small-chartjs">
                                            <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-1">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="value-graph">
                                            <h3>75% <span><i className="fa fa-angle-up font-danger"></i></span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <span>Security Deposits</span>
                                        <h2 className="mb-0">0782</h2>
                                        <p>0.25% <span><i className="fa fa-angle-up"></i></span></p>
                                    </div>
                                    <div className="bg-danger b-r-8">
                                        <div className="small-box">
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="sales-contain">
                                    <h5 className="f-w-600">Gross sales of June</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Buy / Sell</h5>
                            </div>
                            <div className="card-body">
                                <LineChart />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 xl-100">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Goods return</h5>
                            </div>
                            <div className="card-body">
                                <div className="user-status table-responsive products-table">
                                    <table className="table table-bordernone mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Details</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Simply dummy text of the printing</td>
                                                <td className="digits">1</td>
                                                <td className="font-primary">Pending</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>Long established</td>
                                                <td className="digits">5</td>
                                                <td className="font-secondary">Cancle</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>sometimes by accident</td>
                                                <td className="digits">10</td>
                                                <td className="font-secondary">Cancle</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>Classical Latin literature</td>
                                                <td className="digits">9</td>
                                                <td className="font-primary">Return</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>keep the site on the Internet</td>
                                                <td className="digits">8</td>
                                                <td className="font-primary">Pending</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>Molestiae consequatur</td>
                                                <td className="digits">3</td>
                                                <td className="font-secondary">Cancle</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>Pain can procure</td>
                                                <td className="digits">8</td>
                                                <td className="font-primary">Return</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 xl-100">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Empolyee Status</h5>
                            </div>
                            <div className="card-body">
                                <div className="user-status table-responsive products-table">
                                    <table className="table table-bordernone mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Designation</th>
                                                <th scope="col">Skill Level</th>
                                                <th scope="col">Experience</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size"><img
                                                        className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                        src="assets/images/dashboard/user2.jpg" alt=""
                                                        data-original-title="" title="" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-0">John Deo <span
                                                                className="text-muted digits">(14+
                                                                Online)</span></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Designer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar"
                                                                aria-valuenow="50"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">2 Year</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size"><img
                                                        className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                        src="assets/images/dashboard/user1.jpg" alt=""
                                                        data-original-title="" title="" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-0">Holio Mako <span
                                                                className="text-muted digits">(250+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Developer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-secondary"
                                                                role="progressbar"
                                                                aria-valuenow="50" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">3 Year</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size"><img
                                                        className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                        src="assets/images/dashboard/user3.jpg" alt=""
                                                        data-original-title="" title="" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-0">Mohsib lara<span
                                                                className="text-muted digits">(99+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Tester</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar"
                                                                aria-valuenow="50"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">5 Month</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size"><img
                                                        className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                        src="assets/images/dashboard/user.jpg" alt=""
                                                        data-original-title="" title="" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-0">Hileri Soli <span
                                                                className="text-muted digits">(150+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Designer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-secondary"
                                                                role="progressbar"
                                                                aria-valuenow="50" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">3 Month</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size"><img
                                                        className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                        src="assets/images/dashboard/designer.jpg" alt=""
                                                        data-original-title="" title="" />
                                                        <div className="d-inline-block">
                                                            <h6 className="mb-0">Pusiz bia <span
                                                                className="text-muted digits">(14+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Designer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar"
                                                                aria-valuenow="50"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">5 Year</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Sales Status</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-3 col-sm-6 xl-50">
                                        <div className="order-graph">
                                            <h6>Orders By Location</h6>
                                            <div className="chart-block chart-vertical-center">
                                                <DoughnutChart />
                                            </div>
                                            <div className="order-graph-bottom">
                                                <div className="media">
                                                    <div className="order-color-primary"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0">Saint Lucia <span
                                                            className="pull-right">$157</span></h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-color-secondary"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0">Kenya <span className="pull-right">$347</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-color-danger"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0">Liberia<span className="pull-right">$468</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-color-warning"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0">Christmas Island<span
                                                            className="pull-right">$742</span></h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-color-success"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0">Saint Helena <span
                                                            className="pull-right">$647</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 xl-50">
                                        <div className="order-graph sm-order-space">
                                            <h6>Sales By Location</h6>
                                            <div className="peity-chart-dashboard text-center">
                                                <PieChart />
                                            </div>
                                            <div className="order-graph-bottom sales-location">
                                                <div className="media">
                                                    <div className="order-shape-primary"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0 me-0">Germany <span
                                                            className="pull-right">25%</span></h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-shape-secondary"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0 me-0">Brasil <span
                                                            className="pull-right">10%</span></h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-shape-danger"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0 me-0">United Kingdom<span
                                                            className="pull-right">34%</span></h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-shape-warning"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0 me-0">Australia<span
                                                            className="pull-right">5%</span></h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="order-shape-success"></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0 me-0">Canada <span
                                                            className="pull-right">25%</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 xl-100">
                                        <div className="order-graph xl-space">
                                            <h6>Revenue for last month</h6>
                                            <div className="ct-4 flot-chart-container">
                                                <SingleLineChart />
                                            </div>
                                        </div>
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

export default Dashboard

