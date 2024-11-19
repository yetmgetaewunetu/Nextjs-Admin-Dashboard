import { revalidatePath } from "next/cache";
import { User } from "./models";
import { redirect } from "next/navigation";
import { dbConnection } from "./utils";

export const addUser = async (formData) => {
  "use server";
  dbConnection();
  try {
    const { username, email, phone, password, isActive, isAdmin, address } =
      Object.fromEntries(formData);
    const newUser = new User({
      username,
      email,
      phone,
      password,
      isActive,
      isAdmin,
      address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error.message);
    throw new Error("can't add user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (id) => {
  "use server";
  dbConnection();
  try {
    const response = await User.findByIdAndDelete(id);
    console.log(response);
    revalidatePath("/dashboard/users");
  } catch (error) {
    console.log(error.message);
  }
};
