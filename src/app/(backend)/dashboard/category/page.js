import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Category" subtitle="Multikart Admin panel" />

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
                <Link href='/dashboard/category/add' className="btn btn-primary add-row mt-md-0 mt-2">Add Category</Link>
              </div>

              <div className="card-body">
                <div className="table-responsive table-desi">
                  <table className="table all-package table-category " id="editableTable">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="/assets/images/dashboard/product/1.jpg" data-field="image" alt="" />
                        </td>
                        <td data-field="name">Headphones</td>
                        <td data-field="price">$20.00</td>
                        <td className="order-success" data-field="status">
                          <span>Success</span>
                        </td>
                        <td data-field="name">Electronics</td>
                        <td>
                          <Link href={`/dashboard/category/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
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

export default Category