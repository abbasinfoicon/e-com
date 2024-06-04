import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Coupons = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="List Coupons" subtitle="Multikart Admin panel" />

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
                <Link href="/dashboard/coupons/add" className="btn btn-primary mt-md-0 mt-2">Add New Coupon</Link>
              </div>

              <div className="card-body">
                <div>
                  <div className="table-responsive table-desi">
                    <table className="all-package coupon-table table table-striped">
                      <thead>
                        <tr>
                          <th>#id</th>
                          <th>Title</th>
                          <th>Code</th>
                          <th>Discount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-row-id="1">
                          <td>1</td>
                          <td>10% Off</td>
                          <td>2143235</td>
                          <td>10%</td>
                          <td className="order-warning">
                            <span>Waiting</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="2">
                          <td>2</td>
                          <td>25% Off</td>
                          <td>3243468</td>
                          <td>20%</td>
                          <td className="order-success">
                            <span>Success</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="3">
                          <td>3</td>
                          <td>16% Off</td>
                          <td>7846289</td>
                          <td>30%</td>
                          <td className="order-warning">
                            <span>Waiting</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="4">
                          <td>4</td>
                          <td>12% Off</td>
                          <td>3614376</td>
                          <td>15%</td>
                          <td className="order-pending">
                            <span>Pending</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="5">
                          <td>5</td>
                          <td>25% Off</td>
                          <td>8328192</td>
                          <td>35%</td>
                          <td className="order-success">
                            <span>Success</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="6">
                          <td>6</td>
                          <td>17% Off</td>
                          <td>7218376</td>
                          <td>21%</td>
                          <td className="order-pending">
                            <span>Pending</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="7">
                          <td>7</td>
                          <td>5% Off</td>
                          <td>1872349</td>
                          <td>5%</td>
                          <td className="order-success">
                            <span>Success</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                            <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                          </td>
                        </tr>
                        <tr data-row-id="8">
                          <td>8</td>
                          <td>32% Off</td>
                          <td>5488165</td>
                          <td>50%</td>
                          <td className="order-success">
                            <span>Success</span>
                          </td>
                          <td>
                            <Link href={`/dashboard/coupons/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
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
    </div>
  )
}

export default Coupons