import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const User = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="User List" subtitle="Multikart Admin panel" />

      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <form className="form-inline search-form search-box">
              <div className="form-group">
                <input className="form-control-plaintext" type="search" placeholder="Search.." />
                <span className="d-sm-none mobile-search">
                  <i data-feather="search"></i>
                </span>
              </div>
            </form>
            <Link href="/dashboard/user/add" className="btn btn-primary mt-md-0 mt-2">Create User</Link>
          </div>

          <div className="card-body">
            <div className="table-responsive table-desi">
              <table className="all-package coupon-table table table-striped">
                <thead>
                  <tr>
                    <th>#id</th>
                    <th>Avtar</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Last Login</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img src="/assets/images/dashboard/user.jpg" alt="" />
                    </td>
                    <td>Rowan</td>
                    <td>Torres</td>
                    <td>Rowan.torres@gmail.com</td>
                    <td>6 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img src="/assets/images/dashboard/user1.jpg" alt="" />
                    </td>
                    <td>Alonzo</td>
                    <td>Perez</td>
                    <td>Perez.Alonzo@gmail.com</td>
                    <td>2 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <img src="/assets/images/dashboard/user2.jpg" alt="" />
                    </td>
                    <td>Skylar</td>
                    <td>Lane</td>
                    <td>Lane.Skylar@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <img src="/assets/images/dashboard/user3.jpg" alt="" />
                    </td>
                    <td>Brody</td>
                    <td>Gray</td>
                    <td>Gray.Brody@gmail.com</td>
                    <td>3 Days ago</td>
                    <td>Admin</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <img src="/assets/images/dashboard/user4.jpg" alt="" />
                    </td>
                    <td>Colton</td>
                    <td>Clay</td>
                    <td>Colton.Clay@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <img src="/assets/images/dashboard/user5.jpg" alt="" />
                    </td>
                    <td>Maxine</td>
                    <td>Woters</td>
                    <td>woters.maxine@gmail.com</td>
                    <td>10 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <img src="/assets/images/dashboard/user.jpg" alt="" />
                    </td>
                    <td>Alonzo</td>
                    <td>Perez</td>
                    <td>Perez.Alonzo@gmail.com</td>
                    <td>2 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <img src="/assets/images/dashboard/user1.jpg" alt="" />
                    </td>
                    <td>Skylar</td>
                    <td>Lane</td>
                    <td>Lane.Skylar@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      <img src="/assets/images/dashboard/user2.jpg" alt="" />
                    </td>
                    <td>Brody</td>
                    <td>Gray</td>
                    <td>Gray.Brody@gmail.com</td>
                    <td>3 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      <img src="/assets/images/dashboard/user3.jpg" alt="" />
                    </td>
                    <td>Colton</td>
                    <td>Clay</td>
                    <td>Colton.Clay@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Admin</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      <img src="/assets/images/dashboard/user4.jpg" alt="" />
                    </td>
                    <td>Maxine</td>
                    <td>Woters</td>
                    <td>woters.maxine@gmail.com</td>
                    <td>10 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>
                      <img src="/assets/images/dashboard/user5.jpg" alt="" />
                    </td>
                    <td>Alonzo</td>
                    <td>Perez</td>
                    <td>Perez.Alonzo@gmail.com</td>
                    <td>2 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>
                      <img src="/assets/images/dashboard/user.jpg" alt="" />
                    </td>
                    <td>Skylar</td>
                    <td>Lane</td>
                    <td>Lane.Skylar@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>
                      <img src="/assets/images/dashboard/user1.jpg" alt="" />
                    </td>
                    <td>Brody</td>
                    <td>Gray</td>
                    <td>Gray.Brody@gmail.com</td>
                    <td>3 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>
                      <img src="/assets/images/dashboard/user2.jpg" alt="" />
                    </td>
                    <td>Colton</td>
                    <td>Clay</td>
                    <td>Colton.Clay@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>
                      <img src="/assets/images/dashboard/user3.jpg" alt="" />
                    </td>
                    <td>Rowan</td>
                    <td>Torres</td>
                    <td>Rowan.torres@gmail.com</td>
                    <td>6 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>
                      <img src="/assets/images/dashboard/user4.jpg" alt="" />
                    </td>
                    <td>Alonzo</td>
                    <td>Perez</td>
                    <td>Perez.Alonzo@gmail.com</td>
                    <td>2 Days ago</td>
                    <td>Admin</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>
                      <img src="/assets/images/dashboard/user5.jpg" alt="" />
                    </td>
                    <td>Skylar</td>
                    <td>Lane</td>
                    <td>Lane.Skylar@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>
                      <img src="/assets/images/dashboard/user.jpg" alt="" />
                    </td>
                    <td>Brody</td>
                    <td>Gray</td>
                    <td>Gray.Brody@gmail.com</td>
                    <td>3 Days ago</td>
                    <td>Admin</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
                      <Link href="#"><i className="fa fa-trash" title="Delete"></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>
                      <img src="/assets/images/dashboard/user1.jpg" alt="" />
                    </td>
                    <td>Colton</td>
                    <td>Clay</td>
                    <td>Colton.Clay@gmail.com</td>
                    <td>1 Days ago</td>
                    <td>Customer</td>
                    <td>
                      <Link href={`/dashboard/user/1`}><i className="fa fa-eye"></i></Link>
                      <Link href={`/dashboard/user/edit/1`}><i className="fa fa-edit" title="Edit"></i></Link>
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
  )
}

export default User