import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Change Password" subtitle="Multikart Admin panel" parent="profile" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h2>Change Your Password</h2>
            
            <form className="theme-form">
              <div className="form-row row">
                <div className="col-md-12">
                  <input type="text" className="form-control" id="email" placeholder="Enter Your Email" required="" />
                </div><Link href="#" className="btn btn-solid w-auto">Submit</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword