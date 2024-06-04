import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const transaction = () => {
  return (
    <div className="page-body">      
      <Breadcrumb title="Transactions" subtitle="Multikart Admin panel" parent="orders" />
      
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
                  <table className="table trans-table all-package">
                    <thead>
                      <tr>
                        <th>Order Id</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                        <th>Delivery Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>142</td>
                        <td>#212145214510</td>
                        <td>Jul 20, 2021</td>
                        <td>Paypal</td>
                        <td>Pending</td>
                        <td>$175/-</td>
                      </tr>
                      <tr>
                        <td>217</td>
                        <td>#784561421721</td>
                        <td>Jul 25, 2021</td>
                        <td>Paypal</td>
                        <td>Process</td>
                        <td>$845/-</td>
                      </tr>
                      <tr>
                        <td>546</td>
                        <td>#476547821142</td>
                        <td>Jul 29, 2021</td>
                        <td>Stripe</td>
                        <td>Delivered</td>
                        <td>$314/-</td>
                      </tr>
                      <tr>
                        <td>671</td>
                        <td>#745384127541</td>
                        <td>Jul 30, 2021</td>
                        <td>Paypal</td>
                        <td>Pending</td>
                        <td>$217/-</td>
                      </tr>
                      <tr>
                        <td>565</td>
                        <td>#96725125102</td>
                        <td>Aug 01, 2021</td>
                        <td>Stripe</td>
                        <td>Process</td>
                        <td>$542/-</td>
                      </tr>
                      <tr>
                        <td>754</td>
                        <td>#547121023651</td>
                        <td>Aug 10, 2021</td>
                        <td>Stripe</td>
                        <td>Pending</td>
                        <td>$2141/-</td>
                      </tr>
                      <tr>
                        <td>164</td>
                        <td>#876412242215</td>
                        <td>Aug 18, 2021</td>
                        <td>Paypal</td>
                        <td>Delivered</td>
                        <td>$4872/-</td>
                      </tr>
                      <tr>
                        <td>841</td>
                        <td>#31534221621</td>
                        <td>Aug 29, 2021</td>
                        <td>Paypla</td>
                        <td>Process</td>
                        <td>$7841/-</td>
                      </tr>
                      <tr>
                        <td>354</td>
                        <td>#78412457421</td>
                        <td>Sep 09, 2021</td>
                        <td>Paypal</td>
                        <td>Pending</td>
                        <td>$2784/-</td>
                      </tr>
                      <tr>
                        <td>784</td>
                        <td>#241524757448</td>
                        <td>Sep 17, 2021</td>
                        <td>Stripe</td>
                        <td>Delivered</td>
                        <td>$461/-</td>
                      </tr>
                      <tr>
                        <td>142</td>
                        <td>#212145214510</td>
                        <td>Sep 20, 2021</td>
                        <td>Stripe</td>
                        <td>Pending</td>
                        <td>$175/-</td>
                      </tr>
                      <tr>
                        <td>217</td>
                        <td>#784561421721</td>
                        <td>Dec 10, 2021</td>
                        <td>Stripe</td>
                        <td>Process</td>
                        <td>$845/-</td>
                      </tr>
                      <tr>
                        <td>546</td>
                        <td>#476547821142</td>
                        <td>Feb 15, 2021</td>
                        <td>Stripe</td>
                        <td>Delivered</td>
                        <td>$314/-</td>
                      </tr>
                      <tr>
                        <td>671</td>
                        <td>#745384127541</td>
                        <td>Mar 27, 2021</td>
                        <td>Paypal</td>
                        <td>Pending</td>
                        <td>$217/-</td>
                      </tr>
                      <tr>
                        <td>565</td>
                        <td>#96725125102</td>
                        <td>Sep 1, 2021</td>
                        <td>Stripe</td>
                        <td>Process</td>
                        <td>$542/-</td>
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

export default transaction