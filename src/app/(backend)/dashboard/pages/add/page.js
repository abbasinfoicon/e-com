"use client"
import Breadcrumb from '@/components/backend/Breadcrumb'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const AddPages = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Create Page" subtitle="Multikart Admin panel" parent="pages" />

      <div className="container-fluid">
        <div className="card tab2-card">
          <div className="card-body">
            <Tabs>
              <TabList>
                <Tab>General</Tab>
                <Tab>SEO</Tab>
              </TabList>

              <TabPanel>
                <form className="needs-validation">
                  <h4>General</h4>
                  <div className="form-group row">
                    <label for="" className="col-xl-3 col-md-4"><span>*</span> Name</label>
                    <div className="col-xl-8 col-md-7">
                      <input className="form-control" id="" type="text" />
                    </div>
                  </div>

                  <div className="form-group row editor-label">
                    <label className="col-xl-3 col-md-4"><span>*</span> Description</label>
                    <div className="col-xl-8 col-md-7">
                      <div className="editor-space"> 
                        <textarea id="editor1" className="form-control" name="editor1" cols="30" rows="10"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-xl-3 col-md-4">Status</label>
                    <div className="col-xl-8 col-md-7">
                      <div className="checkbox checkbox-primary ">
                        <input id="checkbox-primary-2" type="checkbox" data-original-title="" title="" />
                        <label for="checkbox-primary-2">Enable the Page</label>
                      </div>
                    </div>
                  </div>
                </form>
              </TabPanel>

              <TabPanel>
                <form className="needs-validation">
                  <h4>SEO</h4>
                  <div className="form-group row">
                    <label for="" className="col-xl-3 col-md-4">Meta Title</label>
                    <div className="col-xl-8 col-md-7">
                      <input className="form-control" id="" type="text" />
                    </div>
                  </div>

                  <div className="form-group row editor-label">
                    <label className="col-xl-3 col-md-4">Meta Description</label>
                    <div className="col-xl-8 col-md-7">
                      <textarea rows="4" className="form-control"></textarea>
                    </div>
                  </div>
                </form>
              </TabPanel>
            </Tabs>

            <div className="pull-right">
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPages