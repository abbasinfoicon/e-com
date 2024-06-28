'use server'

import ConnectDB from "@/configs/connectDB";
import userModel from "@/models/UserModel";
import { writeFile } from "fs/promises"
import path from "path";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";

export async function getUser() {
    await ConnectDB();
    const users = await userModel.find({}).lean();
    return JSON.parse(JSON.stringify(users));
    revalidatePath('/users');
}

export async function getSingleUser(id) {
    await ConnectDB();
    const singleUser = await userModel.findById(id).lean();
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
        const country = formData.get("country");
        const state = formData.get("state");
        const city = formData.get("city");
        const zip = formData.get("zip");
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

        await userModel.create({ fname, lname, email, password: hashedpassword, gender, mobile, dob, address, role, country, state, city, zip, img: imgName });

        return { message: 'User added successfully', status: 201 };
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

        cookies().set('token', token, { maxAge: 60 * 60 * 24, httpOnly: true, sameSite: 'strict', });

        return { message: 'Login successfully', status: 201, token, data: user };
    } catch (error) {
        console.error("Login Error", error);
        return { message: 'Error adding Login', error: error.message, status: 500 };
    }
}

export async function logoutUser() {
    try {
        await ConnectDB();

        cookies().delete('token')

        return { message: 'Logout successfully', status: 201, redirectTo: "/login" };
    } catch (error) {
        console.error("Logout Error", error);
        return { message: 'Error adding Logout', error: error.message, status: 500 };
    }
}

export async function edtUser(id, formData) {
    try {
        await ConnectDB();

        const { fname, lname, email, password, gender, mobile, dob, address, role, img } = Object.fromEntries(formData.entries());
        let updateData = { fname, lname, email, gender, mobile, dob, address, role };

        if (img && img.name) {
            const buffer = Buffer.from(await img.arrayBuffer());
            const imgName = `${Date.now()}-${img.name}`;
            await writeFile(path.join(process.cwd(), 'public/assets/images/upload', imgName), buffer);
            updateData.img = imgName;
        }

        if (password) {
            let salt = await bcrypt.genSalt(10);
            let hashedpassword = await bcrypt.hash(password, salt);
            updateData.password = hashedpassword;
        }

        await userModel.findByIdAndUpdate(id, { updateData });

        return { message: 'User updated successfully', status: 202, redirectTo: "/dashboard/user" };
    } catch (error) {
        console.error("Update User Error", error);
        return { message: 'Error updating User', error: error.message, status: 500 };
    }
    revalidatePath('/user');
}

export async function delUser(formData) {
    try {
        await ConnectDB();
        const id = formData.get("id");
        await userModel.findByIdAndDelete(id);

        return { message: 'User Delete successfully', status: 202, redirectTo: "/dashboard/user" };
    } catch (error) {
        console.error("Delete User Error", error);
        return { message: 'Error deleting User', error: error.message, status: 500 };
    }
    revalidatePath('/user');
}

export async function changePassword(formData) {
    try {
        await ConnectDB();

        const id = formData.get("id");
        const password = formData.get("password");
        const newpassword = formData.get("newpassword");
        const cnewpassword = formData.get("cnewpassword");

        const user = await userModel.findById(id).lean();
        if (!user) {
            return { message: 'Invalid User', status: 401 };
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return { message: 'Incorrect password', status: 401 };
        }

        if (newpassword !== cnewpassword) {
            return { message: 'Password Not Match!', status: 401 };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newpassword, salt);

        await userModel.findByIdAndUpdate(id, { password: hashedPassword });

        return { message: 'Password changed successfully', status: 202 };

        revalidatePath('/');
    } catch (error) {
        console.error("Update password Error", error);
        return { message: 'Error updating password', error: error.message, status: 500 };
    }
    revalidatePath('/user');
}

export async function changeContent(formData) {
    try {
        await ConnectDB();

        const id = formData.get("id");
        const fname = formData.get("fname");
        const lname = formData.get("lname");
        const email = formData.get("email");
        const mobile = formData.get("mobile");

        const user = await userModel.findById(id).lean();
        if (!user) {
            return { message: 'Invalid User', status: 401 };
        }

        if (!fname || !lname || !email || !mobile) {
            return { message: 'All fields required', status: 400 };
        }

        await userModel.findByIdAndUpdate(id, { fname, lname, email, mobile });

        return { message: 'Content changed successfully', status: 202 };
    } catch (error) {
        console.error("Update Content Error", error);
        return { message: 'Error updating Content', error: error.message, status: 500 };
    }
    revalidatePath('/user');
}