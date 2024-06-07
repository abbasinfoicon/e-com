"use client"
import { addProduct, edtProduct } from '@/actions/prdtAction'
import React, { useState, useEffect } from 'react'
import { CKEditor } from 'ckeditor4-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Form = ({ data, id }) => {
    const [description, setDescription] = useState(data?.description || "");
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState(data?.img || []);
    const router = useRouter();

    useEffect(() => {
        if (data) {
            setDescription(data.description || "");
            setImagePreviews(data.img ? data.img.map(img => `/assets/images/upload/${img}`) : []);
        }
    }, [data]);

    const handleDescriptionChange = (event) => {
        setDescription(event.editor.getData());
    }

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);

        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.set('description', description);
        images.forEach(img => formData.append('img', img));

        let response;
        if (id) {
            response = await edtProduct(id, formData);
        } else {
            response = await addProduct(formData);
        }

        if (response.status === 201 || response.status === 202) {
            toast.success(response.message);
            router.push(response.redirectTo);
        } else {
            toast.error(response.message);
        }
    }

    return (
        <form className="add-product-form" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="row product-adding">
                <div className="col-xl-4">
                    <div className="add-product">
                        <div className="row">
                            <div className="col-xl-12 xl-50 col-sm-6 col-12">
                                <div className="big-input-file">
                                    <ul>
                                        <li><div className="box-input-file"><input className="upload" type="file" name="img[]" accept='image/png, image/jpeg' multiple onChange={handleImageChange} /><i className="fa fa-plus"></i></div></li>
                                    </ul>
                                    {imagePreviews.length > 0 ? (
                                        <img src={imagePreviews[0]} alt="Preview" className="img-fluid image_zoom_1" />
                                    ) : (
                                        <img src="/assets/images/no-img.jpg" alt="Default" className="img-fluid image_zoom_1" />
                                    )}
                                </div>
                            </div>

                            <div className="col-xl-12 xl-50 col-sm-6 col-12">
                                <ul className='thumbnil-img'>
                                    {imagePreviews.slice(1).map((src, index) => (
                                        <li key={index}>
                                            <img src={src} alt={`Preview ${index}`} className="img-fluid" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-8">
                    <div className="form">
                        <div className="form-group mb-3 row">
                            <label htmlFor="title" className="col-xl-3 col-sm-4 mb-0">Title :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="title" name="title" type="text" required="" placeholder='Enter Product Name' defaultValue={data?.title || ''} />
                            </div>
                        </div>

                        <div className="form-group mb-3 row">
                            <label htmlFor="price" className="col-xl-3 col-sm-4 mb-0">Price :</label>
                            <div className="col-xl-4 col-sm-5">
                                <input className="form-control" id="price" name="price" type="number" required="" placeholder='Product Price' defaultValue={data?.price || ''} />
                            </div>
                            <div className="col-xl-4 col-sm-4">
                                <input className="form-control" id="oldprice" name="oldprice" type="number" required="" placeholder='Old Price' defaultValue={data?.oldprice || ''} />
                            </div>
                        </div>

                        <div className="form-group mb-3 row">
                            <label htmlFor="prdcode" className="col-xl-3 col-sm-4 mb-0">Product Code :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="prdcode" name="prdcode" type="text" required="" placeholder='Enter Product Code' defaultValue={data?.prdcode || ''} />
                            </div>
                        </div>
                    </div>

                    <div className="form">
                        <div className="form-group row">
                            <label htmlFor="size" className="col-xl-3 col-sm-4 mb-0">Select Size :</label>
                            <div className="col-xl-8 col-sm-7">
                                <select className="form-control digits" id="size" name="size" defaultValue={data?.size || ''}>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Extra Large</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                            <fieldset className="qty-box col-xl-9 col-xl-8 col-sm-7">
                                <div className="input-group">
                                    <input className="form-control" type="number" name="totalProducts" placeholder='Total Product' defaultValue={data?.totalProducts || ''} />
                                </div>
                            </fieldset>
                        </div>

                        <div className="form-group row">
                            <label className="col-xl-3 col-sm-4">Add Description :</label>
                            <div className="col-xl-8 col-sm-7 description-sm">
                                <CKEditor initData={description} name="description" onChange={handleDescriptionChange} />
                            </div>
                            <div className="offset-xl-3 offset-sm-4 mt-4">
                                <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'}</button>
                                <Link href="/dashboard/products" className="btn btn-light">Discard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form
