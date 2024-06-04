import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Menu Lists" subtitle="Multikart Admin panel" />

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

                <Link href="/dashboard/menu/add" className="btn btn-primary mt-md-0 mt-2">Create Menu</Link>
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
                      <tr data-row-id="1">
                        <td>1</td>
                        <td>Product List</td>
                        <td className="order-warning">
                          <span>Waiting</span>
                        </td>
                        <td className="list-date">2021-04-18T00:00:00</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>

                      <tr data-row-id="2">
                        <td>2</td>
                        <td>Digital Product</td>
                        <td className="order-success">
                          <span>Success</span>
                        </td>
                        <td className="list-date">2021-04-18T00:00:00</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>

                      <tr data-row-id="3">
                        <td>3</td>
                        <td>User Media</td>
                        <td className="order-warning">
                          <span>Waiting</span>
                        </td>
                        <td className="list-date">2021-04-18T00:00:00</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>

                      <tr data-row-id="4">
                        <td>4</td>
                        <td>About Product</td>
                        <td className="order-pending">
                          <span>Pending</span>
                        </td>
                        <td className="list-date">2021-04-18T00:00:00</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>

                      <tr data-row-id="5">
                        <td>5</td>
                        <td>User Profile</td>
                        <td className="order-success">
                          <span>Success</span>
                        </td>
                        <td className="list-date">2021-04-18T00:00:00</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>

                      <tr data-row-id="6">
                        <td>6</td>
                        <td>Discount Product</td>
                        <td className="order-pending">
                          <span>Pending</span>
                        </td>
                        <td className="list-date">2021-04-18T00:00:00</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                          <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                        </td>
                      </tr>

                      <tr data-row-id="7">
                        <td>7</td>
                        <td>About Invoice</td>
                        <td className="order-success">
                          <span>Success</span>
                        </td>
                        <td className="list-date">pppppp</td>
                        <td>
                          <Link href={`/dashboard/menu/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
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

export default Menu