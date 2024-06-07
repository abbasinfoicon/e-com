'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const UserForm = ({ addUser }) => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await addUser(formData);

        if (response.status === 201 || response.status === 202) {
            toast.success("Create Account successfully");
            router.push("/login");
        } else {
            toast.error(response.message);
        }
    };


    return (
        <form className="row theme-form" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="col-md-7">
                <div className="form-row row">
                    <div className="col-md-6">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter your First Name" required="" />
                    </div>

                    <div className="col-md-6">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lname" placeholder="Enter your Last Name" required="" />
                    </div>

                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter your Email" required="" />
                    </div>

                    <div className="col-md-6">
                        <label>Mobile</label>
                        <input type="tel" className="form-control" name="mobile" placeholder="Enter your Mobile" required="" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" className="form-control">
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label>Image</label>
                        <input type="file" className="form-control" name="img" placeholder="Enter your Image" />
                    </div>

                    <div className="col-md-12">
                        <label>Date Of Birth</label>
                        <input type="date" className="form-control" name="dob" placeholder="Enter your Date Of Birt" />
                    </div>

                    <div className="col-md-6">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter your password" required="" />
                    </div>

                    <div className="col-md-6">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" placeholder="Enter your confirm password" required="" />
                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <div className="col-md-12">
                    <label>Address</label>
                    <textarea name="address" className='form-control' placeholder='Enter your Address'></textarea>
                </div>
            </div>

            <div className="col-md-12">
                <button type='submit' className="btn btn-solid w-auto">create Account</button>
            </div>
        </form>
    )
}

export default UserForm