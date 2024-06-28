import { delProduct, getSingleProduct } from '@/actions/prdtAction'
import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import DeleteProduct from './DeleteProduct'
import { SingleProductSlider } from '@/components/Sliders'

const ProductDetail = async ({ params }) => {
  const { id } = params;
  const data = await getSingleProduct(id);

  return (
    <div className="page-body">
      <Breadcrumb title={data.title} subtitle="Multikart Admin panel" parent="products" />

      <div className="container-fluid">
        <div className="card">
          <div className="row product-page-main card-body">
            <div className="col-xl-4">
              <SingleProductSlider data={data} />
            </div>

            <div className="col-xl-8">
              <div className="product-page-details product-right mb-0">
                <h2>{data.title}</h2>

                <ul className='rating-ul'>
                  <li className='active'><i className="fa fa-star"></i></li>
                  <li className='active'><i className="fa fa-star"></i></li>
                  <li className='active'><i className="fa fa-star-half-o"></i></li>
                  <li className=''><i className="fa fa-star"></i></li>
                  <li className=''><i className="fa fa-star"></i></li>
                </ul>

                <hr />

                <h6 className="product-title">Product Details</h6>
                <div className='small-description' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                <div className="product-price digits mt-2">
                  <h3>${data.price}.00 <del>${data.oldprice}.00</del></h3>
                </div>
                <p>Product Code: {data.prdcode}</p>
                <hr />
                <h6 className="product-title size-text">Size <span className="pull-right">
                  <button className='btn size-chat btn-primary'>size chart</button>
                </span>
                </h6>

                <div className="modal fade" id="sizemodal">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <img src="/assets/images/size-chart.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="size-box">
                  <ul>
                    {data.size.map((size, index) => (<li>{size}</li>))}
                  </ul>
                </div>

                <h6 className="product-title size-text">Colors</h6>
                <div className="size-box">
                  <ul>
                    {data.colors.map((size, index) => (size && <li style={{ backgroundColor: size, fontSize: '0', width: '23px', height: '23px' }}>{size}</li>))}
                  </ul>
                </div>

                <div className="add-product-form">
                  <h6 className="product-title">Quantity: <span>{data.totalProducts} </span></h6>
                </div>

                <hr />

                <h6 className="product-title">Description</h6>

                <div className='description' dangerouslySetInnerHTML={{ __html: data.description }}></div>

                <div className="d-flex m-t-15">
                  <Link href={`/dashboard/products/edit/${data._id}`} className="btn btn-secondary m-r-10">Edit</Link>
                  <DeleteProduct id={data._id} delProduct={delProduct} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail