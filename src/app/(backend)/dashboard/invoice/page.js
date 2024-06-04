import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Invoice = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Invoice" subtitle="Multikart Admin panel" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <form className="form-inline search-form search-box">
                  <div className="form-group">
                    <input className="form-control-plaintext" type="search" placeholder="Search.." />
                  </div>
                </form>
              </div>
              <div className="card-body">
                <div className="table-responsive table-desi">
                  <table className="table all-package table-category current-table " id="editableTable">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Invoice</th>
                        <th>Date</th>
                        <th>Shipping</th>
                        <th>Amount</th>
                        <th>Tax</th>
                        <th>Total</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-field="number">01</td>
                        <td data-field="number">50765</td>
                        <td data-field="Date">15-03-2021</td>
                        <td data-field="number">8.4</td>
                        <td data-field="number">146</td>
                        <td data-field="number">70</td>
                        <td data-field="number">225.4</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">02</td>
                        <td data-field="number">50764</td>
                        <td data-field="Date">01-01-2021</td>
                        <td data-field="number">3.62</td>
                        <td data-field="number">816</td>
                        <td data-field="number">65.28</td>
                        <td data-field="number">884.16</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">03</td>
                        <td data-field="number">50766</td>
                        <td data-field="Date">28-04-2021</td>
                        <td data-field="number">7.3</td>
                        <td data-field="number">47</td>
                        <td data-field="number">724</td>
                        <td data-field="number">789</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">04</td>
                        <td data-field="number">50767</td>
                        <td data-field="Date">31-04-2021</td>
                        <td data-field="number">2.00</td>
                        <td data-field="number">478</td>
                        <td data-field="number">35</td>
                        <td data-field="number">512</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">05</td>
                        <td data-field="number">50768</td>
                        <td data-field="Date">02-05-2021</td>
                        <td data-field="number">1.5</td>
                        <td data-field="number">1460</td>
                        <td data-field="number">45.32</td>
                        <td data-field="number">1515</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">06</td>
                        <td data-field="number">50769</td>
                        <td data-field="Date">03-05-2021</td>
                        <td data-field="number">8.45</td>
                        <td data-field="number">768</td>
                        <td data-field="number">17</td>
                        <td data-field="number">780</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">07</td>
                        <td data-field="number">50770</td>
                        <td data-field="Date">04-05-2021</td>
                        <td data-field="number">25.8</td>
                        <td data-field="number">874</td>
                        <td data-field="number">27.2</td>
                        <td data-field="number">945.10</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">08</td>
                        <td data-field="number">50771</td>
                        <td data-field="Date">08-05-2021</td>
                        <td data-field="number">17.2</td>
                        <td data-field="number">671</td>
                        <td data-field="number">83.7</td>
                        <td data-field="number">775.9</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">09</td>
                        <td data-field="number">50772</td>
                        <td data-field="Date">12-05-2021</td>
                        <td data-field="number">87.5</td>
                        <td data-field="number">572</td>
                        <td data-field="number">8.70</td>
                        <td data-field="number">615</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">10</td>
                        <td data-field="number">50773</td>
                        <td data-field="Date">16-05-2021</td>
                        <td data-field="number">78.12</td>
                        <td data-field="number">489</td>
                        <td data-field="number">10.57</td>
                        <td data-field="number">884.16</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">11</td>
                        <td data-field="number">50774</td>
                        <td data-field="Date">20-05-2021</td>
                        <td data-field="number">57.56</td>
                        <td data-field="number">800</td>
                        <td data-field="number">78.2</td>
                        <td data-field="number">975</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">12</td>
                        <td data-field="number">50775</td>
                        <td data-field="Date">22-05-2021</td>
                        <td data-field="number">40.17</td>
                        <td data-field="number">867</td>
                        <td data-field="number">57.2</td>
                        <td data-field="number">945</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">13</td>
                        <td data-field="number">50776</td>
                        <td data-field="Date">25-05-2021</td>
                        <td data-field="number">80.04</td>
                        <td data-field="number">4782</td>
                        <td data-field="number">47.5</td>
                        <td data-field="number">5354</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">14</td>
                        <td data-field="number">50777</td>
                        <td data-field="Date">27-05-2021</td>
                        <td data-field="number">6.15</td>
                        <td data-field="number">576</td>
                        <td data-field="number">4.488</td>
                        <td data-field="number">884</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">15</td>
                        <td data-field="number">50778</td>
                        <td data-field="Date">29-05-2021</td>
                        <td data-field="number">8.67</td>
                        <td data-field="number">875</td>
                        <td data-field="number">56.78</td>
                        <td data-field="number">987.16</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">16</td>
                        <td data-field="number">50779</td>
                        <td data-field="Date">05-06-2021</td>
                        <td data-field="number">7.88</td>
                        <td data-field="number">547</td>
                        <td data-field="number">5.72</td>
                        <td data-field="number">600.16</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">17</td>
                        <td data-field="number">50780</td>
                        <td data-field="Date">08-06-2021</td>
                        <td data-field="number">3.62</td>
                        <td data-field="number">781</td>
                        <td data-field="number">23.47</td>
                        <td data-field="number">817</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">18</td>
                        <td data-field="number">50781</td>
                        <td data-field="Date">14-06-2021</td>
                        <td data-field="number">7.3</td>
                        <td data-field="number">47</td>
                        <td data-field="number">36.28</td>
                        <td data-field="number">153.16</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">19</td>
                        <td data-field="number">50782</td>
                        <td data-field="Date">18-06-2021</td>
                        <td data-field="number">2.00</td>
                        <td data-field="number">478</td>
                        <td data-field="number">35</td>
                        <td data-field="number">512</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td data-field="number">20</td>
                        <td data-field="number">50783</td>
                        <td data-field="Date">21-06-2021</td>
                        <td data-field="number">1.5</td>
                        <td data-field="number">1460</td>
                        <td data-field="number">45.32</td>
                        <td data-field="number">1515</td>
                        <td>
                          <Link href="#"><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
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
  )
}

export default Invoice