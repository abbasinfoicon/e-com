'use client'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const ProductDescription = ({ data }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Specification</Tab>
                <Tab>Video</Tab>
                <Tab>Write Review</Tab>
            </TabList>

            <TabPanel>
                <div className="product-tab-discription">
                    <div className='description' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='specification' dangerouslySetInnerHTML={{ __html: data.specification }}></div>
            </TabPanel>
            <TabPanel>
                <div className="">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                        allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </TabPanel>
            <TabPanel>
                <form className="theme-form">
                    <div className="form-row row">
                        <div className="col-md-12">
                            <div className="media">
                                <label>Rating</label>
                                <div className="media-body ms-3">
                                    <div className="rating three-star"><i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="review">Review Title</label>
                            <input type="text" className="form-control" id="review"
                                placeholder="Enter your Review Subjects" required />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="review">Review Comment</label>
                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here"
                                id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-solid" type="submit">Submit YOur
                                Review</button>
                        </div>
                    </div>
                </form>
            </TabPanel>
        </Tabs>
    )
}

export default ProductDescription