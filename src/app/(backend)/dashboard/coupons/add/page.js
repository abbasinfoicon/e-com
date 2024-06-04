"use client"
import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const AddCoupone = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Create Coupons" subtitle="Multikart Admin panel" parent="coupons" />

      <div className="container-fluid">
        <div className="card tab2-card">
          <div className="card-body">
            <Tabs>
              <TabList>
                <Tab>General</Tab>
                <Tab>Restriction</Tab>
                <Tab>Usage</Tab>
              </TabList>

              <TabPanel>
                <form className="needs-validation">
                  <h4>General</h4>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group row">
                        <label htmlFor="" className="col-xl-3 col-md-4"><span>*</span> Coupan Title </label>
                        <div className="col-md-7">
                          <input className="form-control" id="" type="text" required="" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="" className="col-xl-3 col-md-4"><span>*</span>Coupan Code </label>
                        <div className="col-md-7">
                          <input className="form-control" id="" type="text" required="" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Start Date</label>
                        <div className="col-md-7">
                          <input className="datepicker-here form-control digits" type="date" data-language="en" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">End Date</label>
                        <div className="col-md-7">
                          <input className="datepicker-here form-control digits" type="date" data-language="en" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Free Shipping</label>
                        <div className="col-md-7">
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox-primary-1" type="checkbox" title="" />
                            <label htmlFor="checkbox-primary-1">Allow Free Shipping</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Quantity</label>
                        <div className="col-md-7">
                          <input className="form-control" type="number" required="" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Discount Type</label>
                        <div className="col-md-7">
                          <select className="custom-select w-100 form-control" required="">
                            <option defaultValue="">--Select--</option>
                            <option defaultValue="1">Percent</option>
                            <option defaultValue="2">Fixed</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Status</label>
                        <div className="col-md-7">
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox-primary-2" type="checkbox" title="" />
                            <label htmlFor="checkbox-primary-2">Enable the Coupon</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </TabPanel>

              <TabPanel>
                <form className="needs-validation">
                  <h4>Restriction</h4>

                  <div className="form-group row">
                    <label htmlFor="" className="col-xl-3 col-md-4">Products</label>
                    <div className="col-md-7">
                      <input className="form-control" id="" type="text" required="" />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-xl-3 col-md-4">Category</label>
                    <div className="col-md-7">
                      <select className="custom-select w-100 form-control" required="">
                        <option defaultValue="">--Select--</option>
                        <option defaultValue="1">Electronics</option>
                        <option defaultValue="2">Clothes</option>
                        <option defaultValue="2">Shoes</option>
                        <option defaultValue="2">Digital</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="" className="col-xl-3 col-md-4">Minimum Spend</label>
                    <div className="col-md-7">
                      <input className="form-control" id="" type="number" />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="" className="col-xl-3 col-md-4">Maximum Spend</label>
                    <div className="col-md-7">
                      <input className="form-control" id="" type="number" />
                    </div>
                  </div>
                </form>
              </TabPanel>

              <TabPanel>
                <form className="needs-validation">
                  <h4>Usage Limits</h4>

                  <div className="form-group row">
                    <label htmlFor="" className="col-xl-3 col-md-4">Per Limit</label>
                    <div className="col-md-7">
                      <input className="form-control" id="" type="number" />
                    </div>                    
                  </div>

                  <div className="form-group row">
                    <label htmlFor="" className="col-xl-3 col-md-4">Per Customer</label>
                    <div className="col-md-7">
                      <input className="form-control" id="" type="number" />
                    </div>
                  </div>
                </form>
              </TabPanel>
            </Tabs>

            <div className="pull-right">
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

export default AddCoupone