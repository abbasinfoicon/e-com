import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Pages = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="List Page" subtitle="Multikart Admin panel" />

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
                <Link href="/dashboard/pages/add" className="btn btn-primary mt-md-0 mt-2">Add New Page</Link>
              </div>

              <div className="card-body">
                <div className="table-responsive table-desi">
                  <table className="all-package coupon-table table table-striped">
                    <thead>
                      <tr>
                        <th>#id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Created On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Product List</td>
                        <td className="order-warning">
                          <span>Waiting</span>
                        </td>
                        <td className="list-date">Sep 5, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Digital Product</td>
                        <td className="order-success">
                          <span>Success</span>
                        </td>
                        <td className="list-date">Mar 10, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>User Media</td>
                        <td className="order-warning">
                          <span>Waiting</span>
                        </td>
                        <td className="list-date">Aug 24, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>About Product</td>
                        <td className="order-pending">
                          <span>Pending</span>
                        </td>
                        <td className="list-date">Jun 12, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>User Profile</td>
                        <td className="order-success">
                          <span>Success</span>
                        </td>
                        <td className="list-date">May 26, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Discount Product</td>
                        <td className="order-pending">
                          <span>Pending</span>
                        </td>
                        <td className="list-date">Sep 13, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>About Invoice</td>
                        <td className="order-success">
                          <span>Success</span>
                        </td>
                        <td className="list-date">Dec 30, 2021</td>
                        <td>
                          <Link href={`/dashboard/pages/1`}><i className="fa fa-eye"></i></Link>
                          <Link href={`/dashboard/pages/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
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

export default Pages