"use client"
import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const Profile = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Profile" subtitle="Multikart Admin panel" />

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
                <div className="project-status">
                  <h5 className="f-w-600">Employee Status</h5>
                  <div className="media">
                    <div className="media-body">
                      <h6>Performance <span className="pull-right">80%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h6>Overtime <span className="pull-right">60%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h6>Leaves taken <span className="pull-right">70%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card tab2-card">
              <div className="card-body">
                <Tabs>
                  <TabList>
                    <Tab>Profile</Tab>
                    <Tab>Contact</Tab>
                  </TabList>

                  <TabPanel>
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
                  </TabPanel>
                  <TabPanel>
                    <div className="account-setting">
                      <h5 className="f-w-600">Notifications</h5>
                      <div className="row">
                        <div className="col">
                          <label className="d-block" for="chk-ani">
                            <input className="checkbox_animated" id="chk-ani" type="checkbox" /> Allow Desktop Notifications </label>
                          <label className="d-block" for="chk-ani1">
                            <input className="checkbox_animated" id="chk-ani1" type="checkbox" /> Enable Notifications </label>
                          <label className="d-block" for="chk-ani2">
                            <input className="checkbox_animated" id="chk-ani2" type="checkbox" /> Get notification for my own activity </label>
                          <label className="d-block mb-0" for="chk-ani3">
                            <input className="checkbox_animated" id="chk-ani3" type="checkbox" checked="" /> DND </label>
                        </div>
                      </div>
                    </div>
                    <div className="account-setting deactivate-account">
                      <h5 className="f-w-600">Deactivate Account</h5>
                      <div className="row">
                        <div className="col">
                          <label className="d-block" for="edo-ani">
                            <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked="" /> I have a privacy concern </label>
                          <label className="d-block" for="edo-ani1">
                            <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" /> This is temporary </label>
                          <label className="d-block mb-0" for="edo-ani2">
                            <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked="" /> Other </label>
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary">Deactivate Account</button>
                    </div>
                    <div className="account-setting deactivate-account">
                      <h5 className="f-w-600">Delete Account</h5>
                      <div className="row">
                        <div className="col">
                          <label className="d-block" for="edo-ani3">
                            <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" checked="" /> No longer usable </label>
                          <label className="d-block" for="edo-ani4">
                            <input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" /> Want to switch on other account </label>
                          <label className="d-block mb-0" for="edo-ani5">
                            <input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani1" checked="" /> Other </label>
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary">Delete Account</button>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile