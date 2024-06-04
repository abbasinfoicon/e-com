import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const OrderList = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Order List" subtitle="Multikart Admin panel" />

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
                  <table className="table all-package" id="editableTable">
                    <thead>
                      <tr>
                        <th>Order Image</th>
                        <th>Order Code</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                        <th>Delivery Status</th>
                        <th>Amount</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/1.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 406-4883635</td>
                        <td data-field="date">Jul 20, 2021</td>
                        <td data-field="text">Paypal</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/2.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 573-685572</td>
                        <td data-field="date">Jul 25, 2021</td>
                        <td data-field="text">Paypal</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/3.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 759-4568734</td>
                        <td data-field="date">Jul 29, 2021</td>
                        <td data-field="text">Stripe</td>
                        <td className="order-warning">
                          <span>Refunded</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/4.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 546-7664537</td>
                        <td data-field="date">Jul 30, 2021</td>
                        <td data-field="text">Paypal</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/6.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 479-7533144</td>
                        <td data-field="date">Aug 01, 2021</td>
                        <td data-field="text">Stripe</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/7.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 456-1245789</td>
                        <td data-field="date">Aug 10, 2021</td>
                        <td data-field="text">Stripe</td>
                        <td className="order-pending">
                          <span>Pending</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/8.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 057-3657895</td>
                        <td data-field="date">Aug 18, 2021</td>
                        <td data-field="text">Paypal</td>
                        <td className="order-pending">
                          <span>Pending</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/9.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 123-1234567</td>
                        <td data-field="date">Aug 29, 2021</td>
                        <td data-field="text">Paypla</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/10.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 987-9876543</td>
                        <td data-field="date">Sep 09, 2021</td>
                        <td data-field="text">Paypal</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/11.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 147-3692584</td>
                        <td data-field="date">Sep 17, 2021</td>
                        <td data-field="text">Stripe</td>
                        <td className="order-success">
                          <span>Approved</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/12.jpg" alt="users" />
                        </td>
                        <td data-field="number">+ 586-5865224</td>
                        <td data-field="date">Sep 20, 2021</td>
                        <td data-field="text">Stripe</td>
                        <td className="order-warning">
                          <span>Refunded</span>
                        </td>
                        <td data-field="number">$15</td>
                        <td>
                          <Link href={`/dashboard/orders/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/orders/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
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

export default OrderList