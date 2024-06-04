import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'

const UserDetails = () => {
    return (
        <div className="page-body">
            <Breadcrumb title="User Details" subtitle="Multikart Admin panel" parent="user" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-details text-center">
                                    <img src="/assets/images/dashboard/designer.jpg" alt="" className="img-fluid img-90 rounded-circle" />
                                    <h5 className="f-w-600 mb-0">John deo</h5>
                                    <span>johndeo@gmail.com</span>
                                    <div className="social">
                                        <div className="form-group btn-showcase">
                                            <button className="btn social-btn btn-fb d-inline-block">
                                                <i className="fa fa-facebook"></i>
                                            </button>
                                            <button className="btn social-btn btn-twitter d-inline-block">
                                                <i className="fa fa-google"></i>
                                            </button>
                                            <button className="btn social-btn btn-google d-inline-block me-0">
                                                <i className="fa fa-twitter"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h5 className="f-w-600">Profile</h5>
                                <div className="table-responsive profile-table">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>First Name:</td>
                                                <td>Johan</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name:</td>
                                                <td>Deo</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>johndeo@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td>Male</td>
                                            </tr>
                                            <tr>
                                                <td>Mobile Number:</td>
                                                <td>2124821463</td>
                                            </tr>
                                            <tr>
                                                <td>DOB:</td>
                                                <td>Dec, 15 1993</td>
                                            </tr>
                                            <tr>
                                                <td>Location:</td>
                                                <td>USA</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-body">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis tempora incidunt deserunt asperiores maxime quisquam doloremque quis iste modi exercitationem officia atque suscipit a, alias commodi aliquam consequatur perspiciatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails