import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Vendors = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Vendor List" subtitle="Multikart Admin panel" />

      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <form className="form-inline search-form search-box">
              <div className="form-group">
                <input className="form-control-plaintext" type="search" placeholder="Search.." /><span
                  className="d-sm-none mobile-search"><i data-feather="search"></i></span>
              </div>
            </form>

            <Link href="/dashboard/vendors/add" className="btn btn-primary mt-md-0 mt-2">Create Vendort</Link>
          </div>
          <div className="card-body vendor-table">
            <table className="table table-hover table-bordered table-striped" id="basic-1">
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Products</th>
                  <th>Store Name</th>
                  <th>Create Date</th>
                  <th>Wallet Balance</th>
                  <th>Revenue</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/team/2.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Petey Cruiser</span>
                    </div>
                  </td>
                  <td>1670</td>
                  <td>Warephase</td>
                  <td>8/10/18</td>
                  <td>$576132</td>
                  <td>$9761266</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/user5.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Rowan torres</span>
                    </div>
                  </td>
                  <td>790</td>
                  <td>Sunnamplex</td>
                  <td>5/6/18</td>
                  <td>$87610</td>
                  <td>$631479</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/boy-2.png" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Gray Brody</span>
                    </div>
                  </td>
                  <td>579</td>
                  <td>Conecom</td>
                  <td>25/2/18</td>
                  <td>$245508</td>
                  <td>$1279520</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/user.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Lane Skylar</span>
                    </div>
                  </td>
                  <td>8972</td>
                  <td>Golddex</td>
                  <td>30/3/18</td>
                  <td>$7812483</td>
                  <td>$8761424</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/designer.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Colton Clay</span>
                    </div>
                  </td>
                  <td>9710</td>
                  <td>Green-Plus</td>
                  <td>6/5/18</td>
                  <td>$780250</td>
                  <td>$8793611</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/user2.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Woters maxine</span>
                    </div>
                  </td>
                  <td>680</td>
                  <td>Kan-code</td>
                  <td>15/4/18</td>
                  <td>$27910</td>
                  <td>$579214</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/user1.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Lane Skylar</span>
                    </div>
                  </td>
                  <td>8678</td>
                  <td>Plexzap</td>
                  <td>4/8/18</td>
                  <td>$89340</td>
                  <td>$10285255</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/dashboard/user3.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Perez Alonzo</span>
                    </div>
                  </td>
                  <td>3476</td>
                  <td>Betatech</td>
                  <td>17/9/18</td>
                  <td>$32451</td>
                  <td>$647212</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/team/3.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Anna Mull</span>
                    </div>
                  </td>
                  <td>1670</td>
                  <td>Zotware</td>
                  <td>8/10/18</td>
                  <td>$576132</td>
                  <td>$9761266</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex vendor-list">
                      <img src="/assets/images/team/1.jpg" alt=""
                        className="img-fluid img-40 rounded-circle" />
                      <span>Paige Turner</span>
                    </div>
                  </td>
                  <td>4680</td>
                  <td>Finhigh</td>
                  <td>11/7/18</td>
                  <td>$87616</td>
                  <td>$947611</td>
                  <td>
                    <div>
                      <Link href={`/dashboard/vendors/1`}><i className="fa fa-eye font-primary"></i></Link>
                      <Link href={`/dashboard/vendors/edit/1`}><i className="fa fa-edit me-2 font-success"></i></Link>
                      <Link href="#"><i className="fa fa-trash font-danger"></i></Link>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vendors