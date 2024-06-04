'use client'
import Breadcrumb from '@/components/Breadcrumb'
import { SlideshowLightbox } from 'lightbox.js-react'
import React from 'react'

const Gallery = () => {
  return (
    <>
      <Breadcrumb title="Gallery" />

      <section className="portfolio-section portfolio-padding ratio2_3">
        <div className="container">
          <div className="zoom-gallery">
            <SlideshowLightbox className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3'>
              <img src="/assets/images/portfolio/grid/1.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/2.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/3.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/4.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/5.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/6.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/7.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/8.jpg" className="img-fluid bg-img col-md-4" />
              <img src="/assets/images/portfolio/grid/9.jpg" className="img-fluid bg-img col-md-4" />
            </SlideshowLightbox>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery