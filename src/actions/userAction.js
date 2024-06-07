'use server'

import ConnectDB from "@/configs/connectDB";
import userModel from "@/models/UserModel";
import { writeFile } from "fs/promises"
import { revalidatePath, revalidateTag } from "next/cache";
import path from "path";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUser() {
    await ConnectDB();
    const Users = await userModel.find({}).lean();
    revalidateTag('/dashboard/user');
    return JSON.parse(JSON.stringify(Users));
}

export async function getSingleUser(id) {
    await ConnectDB();
    const singleUser = await userModel.findById(id).lean();
    revalidateTag('/dashboard/user');
    return JSON.parse(JSON.stringify(singleUser));
}

export async function addUser(formData) {
    try {
        await ConnectDB();

        const fname = formData.get("fname");
        const lname = formData.get("lname");
        const email = formData.get("email");
        const password = formData.get("password");
        const cpassword = formData.get("cpassword");
        const gender = formData.get("gender");
        const mobile = formData.get("mobile");
        const dob = formData.get("dob");
        const address = formData.get("address");
        let role = formData.get("role");
        const img = formData.get("img");

        let imgName = '';
        if (img && img.name) {
            const bytes = await img.arrayBuffer();
            const buffer = Buffer.from(bytes);
            imgName = `${Date.now()}-${img.name}`;
            await writeFile(path.join(process.cwd(), 'public/assets/images/upload', imgName), buffer);
        }

        if (password !== cpassword) {
            return { message: 'Password Not Match!', status: 400 };
        }

        if (!fname || !lname || !email || !password || !mobile) {
            return { message: 'All fields required', status: 400 };
        }

        let salt = await bcrypt.genSalt(10);
        let hashedpassword = await bcrypt.hash(password, salt);

        if (!role) {
            role = "user";
        }

        await userModel.create({ fname, lname, email, password: hashedpassword, gender, mobile, dob, address, role, img: imgName });
        revalidateTag("/dashboard/user");

        return { message: 'User added successfully', status: 201, redirectTo: "/dashboard/user" };
    } catch (error) {
        console.error("Add User Error", error);
        return { message: 'Error adding User', error: error.message, status: 500 };
    }
}

export async function loginUser(formData) {
    try {
        await ConnectDB();
        const email = formData.get("email");
        const password = formData.get("password");

        const user = await userModel.findOne({ email });
        if (!user) {
            return { message: 'Invalid User', status: 400 };
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return { message: 'Incorrect email or password', status: 400 };
        }

        const tokenData = {
            id: user._id,
            email: user.email
        }
        const token = JWT.sign(tokenData, "myappsecuritykey", { expiresIn: "1h" });

        cookies().set('token', token, {
            maxAge: 60 * 60 * 24,
            httpOnly: true,
            sameSite: 'strict',
        });

        return { message: 'Login successfully', status: 201, redirectTo: "/user", token, role: user.role };
    } catch (error) {
        console.error("Login Error", error);
        return { message: 'Error adding Login', error: error.message, status: 500 };
    }
}

export async function logoutUser(formData) {
    try {
        await ConnectDB();

        cookies.delete('token');

        return { message: 'Logout successfully', status: 201, redirectTo: "/login" };
    } catch (error) {
        console.error("Logout Error", error);
        return { message: 'Error adding Logout', error: error.message, status: 500 };
    }
}

export async function edtUser(id, formData) {
    try {
        await ConnectDB();

        const fname = formData.get("fname");
        const lname = formData.get("lname");
        const email = formData.get("email");
        const password = formData.get("password");
        const gender = formData.get("gender");
        const mobile = formData.get("mobile");
        const dob = formData.get("dob");
        const address = formData.get("address");
        const role = formData.get("role");
        const img = formData.get("img");

        const bytes = await img.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const imgName = `${Date.now()}-${img.name}`;
        await writeFile(path.join(process.cwd(), 'public/assets/images/upload', imgName), buffer);

        await userModel.findByIdAndUpdate(id, { fname, lname, email, password, gender, mobile, dob, address, role, img: imgName.name });
        revalidatePath("/dashboard/user");

        return { message: 'User updated successfully', status: 202, redirectTo: "/dashboard/user" };
    } catch (error) {
        console.error("Update User Error", error);
        return { message: 'Error updating User', error: error.message, status: 500 };
    }
}

export async function delUser(formData) {
    try {
        await ConnectDB();
        const id = formData.get("id");
        await userModel.findByIdAndDelete(id);
        revalidatePath("/dashboard/user");

        return { message: 'User Delete successfully', status: 202, redirectTo: "/dashboard/user" };
    } catch (error) {
        console.error("Delete User Error", error);
        return { message: 'Error deleting User', error: error.message, status: 500 };
    }
}