'use server'

import ConnectDB from "@/configs/connectDB";
import productModel from "@/models/productModel";
import { writeFile } from "fs/promises"
import { revalidatePath, revalidateTag } from "next/cache";
import path from "path";

export async function getProduct() {
    await ConnectDB();
    const products = await productModel.find({}).lean();
    revalidateTag('/dashboard/products');
    return JSON.parse(JSON.stringify(products));
}

export async function getSingleProduct(id) {
    await ConnectDB();
    const singleProduct = await productModel.findById(id).lean();
    revalidateTag('/dashboard/products');
    return JSON.parse(JSON.stringify(singleProduct));
}

export async function addProduct(formData) {
    try {
        await ConnectDB();

        const title = formData.get("title");
        const price = formData.get("price");
        const oldprice = formData.get("oldprice");
        const prdcode = formData.get("prdcode");
        const size = formData.get("size");
        const totalProducts = formData.get("totalProducts");
        const description = formData.get("description");
        const images = formData.getAll("img");

        const imgNames = [];
        for (const img of images) {
            const bytes = await img.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const imgName = `${Date.now()}-${img.name}`;
            await writeFile(path.join(process.cwd(), 'public/assets/images/upload', imgName), buffer);
            imgNames.push(imgName);
        }

        if (!title || !price || !oldprice || !prdcode || !size || !totalProducts || !description) {
            return { message: 'All fields required ', status: 400 };
        }

        await productModel.create({ title, price, oldprice, prdcode, size, totalProducts, description, img: imgNames });
        revalidateTag("/dashboard/products");

        return { message: 'Product added successfully', status: 201, redirectTo: "/dashboard/products" };
    } catch (error) {
        console.error("Add Product Error", error);
        return { message: 'Error adding product', error: error.message, status: 500 };
    }
}

export async function edtProduct(id, formData) {
    try {
        await ConnectDB();

        const title = formData.get("title");
        const price = formData.get("price");
        const oldprice = formData.get("oldprice");
        const prdcode = formData.get("prdcode");
        const size = formData.get("size");
        const totalProducts = formData.get("totalProducts");
        const description = formData.get("description");
        const img = formData.getAll("img");

        const imgNames = [];
        for (const image of img) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            await writeFile(`./public/assets/images/upload/${image.name}`, buffer);
            imgNames.push(image.name);
        }

        await productModel.findByIdAndUpdate(id, { title, price, oldprice, prdcode, size, totalProducts, description, img: imgNames.length > 0 ? imgNames : undefined, });
        revalidatePath("/dashboard/products");

        return { message: 'Product updated successfully', status: 202, redirectTo: "/dashboard/products" };
    } catch (error) {
        console.error("Update Product Error", error);
        return { message: 'Error updating product', error: error.message, status: 500 };
    }
}

export async function delProduct(formData) {
    try {
        await ConnectDB();
        const id = formData.get("id");
        await productModel.findByIdAndDelete(id);
        revalidatePath("/dashboard/products");

        return { message: 'Product Delete successfully', status: 202, redirectTo: "/dashboard/products" };
    } catch (error) {
        console.error("Delete Product Error", error);
        return { message: 'Error deleting product', error: error.message, status: 500 };
    }
}