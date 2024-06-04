import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const Tracking = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Order Tracking" subtitle="Multikart Admin panel" parent="orders" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 overflow-hidden">
                    <div className="order-left-image">
                      <div className="tracking-product-image">
                        <img src="/assets/images/fashion/1.jpg" className="img-fluid w-100" alt="" />
                      </div>
                      <div className="order-image-contain">
                        <h4>Van Heusen Women's Solid Regular Fit Polo</h4>
                        <div className="tracker-number">
                          <p>Order Number : <span>W765EWR8568871</span>
                          </p>
                          <p>Brand : <span>Van Heusen</span>
                          </p>
                          <p>Order Placed : <span>June 25, 2021</span>
                          </p>
                        </div>
                        <h5>Your items is on the way. Tracking information will be available within 24 hours.</h5>
                      </div>
                    </div>
                  </div>
                  <ol className="progtrckr">
                    <li className="progtrckr-done">
                      <h5>Order Processing</h5>
                      <h6>05:43 AM</h6>
                    </li>
                    <li className="progtrckr-done">
                      <h5>Pre-Production</h5>
                      <h6>01:21 PM</h6>
                    </li>
                    <li className="progtrckr-done">
                      <h5>In Production</h5>
                      <h6>Processing</h6>
                    </li>
                    <li className="progtrckr-todo">
                      <h5>Shipped</h5>
                      <h6>Pending</h6>
                    </li>
                    <li className="progtrckr-todo">
                      <h5>Delivered</h5>
                      <h6>Pending</h6>
                    </li>
                  </ol>
                  <div className="col-12 overflow-visible">
                    <div className="tracker-table all-package">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr className="table-head">
                              <th scope="col">Date</th>
                              <th scope="col">Time</th>
                              <th scope="col">Discription</th>
                              <th scope="col">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h6>21/05/2021</h6>
                              </td>
                              <td>
                                <h6>12:21 AM</h6>
                              </td>
                              <td>
                                <p className="fw-bold">Shipped Info</p>
                              </td>
                              <td>
                                <h6>3 SW. Summit St. Lithonia, GA 30038</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6>15/04/2021</h6>
                              </td>
                              <td>
                                <h6>01:00 PM</h6>
                              </td>
                              <td>
                                <p className="fw-bold">Shipped</p>
                              </td>
                              <td>
                                <h6>70 Rockwell Lane Falls Church, VA 22041</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6>04/05/2021</h6>
                              </td>
                              <td>
                                <h6>03:58 AM</h6>
                              </td>
                              <td>
                                <p className="fw-bold">Shipped Info Received</p>
                              </td>
                              <td>
                                <h6>13 Durham St. The Villages, FL 32162</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6>30/04/2021</h6>
                              </td>
                              <td>
                                <h6>06:26 PM</h6>
                              </td>
                              <td>
                                <p className="fw-bold">Origin Scan</p>
                              </td>
                              <td>
                                <h6>38 Saxon Lane Mobile, AL 36605</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6>02/02/2021</h6>
                              </td>
                              <td>
                                <h6>03:45 PM</h6>
                              </td>
                              <td>
                                <p className="fw-bold">Shipped Info Received</p>
                              </td>
                              <td>
                                <h6>3 Willow Street Chillicothe, OH 45601</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6>14/01/2021</h6>
                              </td>
                              <td>
                                <h6>12:21 AM</h6>
                              </td>
                              <td>
                                <p className="fw-bold">Shipped</p>
                              </td>
                              <td>
                                <h6>35 Brickyard Rd. Marshalltown, IA 50158</h6>
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
      </div>
    </div>
  )
}

export default Tracking