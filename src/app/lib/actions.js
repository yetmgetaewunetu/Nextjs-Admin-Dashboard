"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import { dbConnection } from "./utils";
import bcrypt from "bcrypt";
import { signIn, signOut } from "../auth";

export const addUser = async (formData) => {
  dbConnection();
  try {
    const { username, email, phone, password, isActive, isAdmin, address } =
      Object.fromEntries(formData);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword,
      isActive,
      isAdmin,
      address,
    });
    const response = await newUser.save();
    console.log(response);
  } catch (error) {
    console.log(error.message);
    throw new Error("can't add user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const addProduct = async (formData) => {
  dbConnection();
  try {
    const { title, price, stock, description, category, color, size } =
      Object.fromEntries(formData);
    const newProduct = new Product({
      title,
      price,
      stock,
      category,
      color,
      size,
      description,
    });
    await newProduct.save();
    // console.log(formData);
  } catch (error) {
    console.log(error.message);
    throw new Error("can't add product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  dbConnection();
  try {
    const { id } = Object.fromEntries(formData);
    const response = await User.findByIdAndDelete(id);
    // console.log(response);
    revalidatePath("/dashboard/users");
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteProduct = async (formData) => {
  dbConnection();
  try {
    const { id } = Object.fromEntries(formData);
    // console.log(formData);
    const response = await Product.findByIdAndDelete(id);
    // console.log(response);
    revalidatePath("/dashboard/users");
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (id) => {
  dbConnection();

  try {
    const user = await User.findById(id);
    // console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (formData) => {
  await dbConnection();
  console.log(formData);
  try {
    let { id, username, email, phone, password, isActive, isAdmin, address } =
      Object.fromEntries(formData);
    const updateFields = {
      id,
      username,
      email,
      phone,
      password,
      isActive,
      isAdmin,
      address,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key];
    });
    // console.log(updateFields);
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt);
    }

    const updated = await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const getProduct = async (id) => {
  dbConnection();
  try {
    const product = await Product.findById(id);
    // console.log(product.description);
    return product;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (formData) => {
  dbConnection();
  // console.log(formData);
  // console.log("updating product");
  try {
    let { id, title, price, stock, description, category, color, size } =
      Object.fromEntries(formData);
    const updateFields = {
      title,
      price,
      stock,
      description,
      category,
      color,
      size,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key];
    });
    console.log(updateFields);

    const updated = await Product.findByIdAndUpdate(id, updateFields);
    console.log(updated);
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prevVal, formData) => {
  dbConnection();
  console.log(formData);
  try {
    const { username, password } = Object.fromEntries(formData);
    const response = await signIn("credentials", {
      username,
      password,
      // redirect: "/home",
    });
    return response;
  } catch (error) {
    return "Wrong Credentials";
  }
};
