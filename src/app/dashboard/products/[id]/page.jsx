import { getProduct, updateProduct } from "@/app/lib/actions";
import { Product } from "@/app/lib/models";
import Image from "next/image";
import React from "react";
async function SingleProductViewPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  // console.log(product.description);
  return (
    <div className="flex gap-6 mt-5 p-3 ">
      <div
        style={{ flex: 1 }}
        className=" flex flex-col h-max -bg--bgSoft p-3 rounded-md text-xl text-center"
      >
        <div className=" w-full h-80 relative">
          <Image src={product.img || "/mango.png"} alt="img" fill />
        </div>
        {product.title}
      </div>
      <form
        action={updateProduct}
        style={{ flex: 2 }}
        className="-bg--bgSoft p-3 rounded-md flex flex-col gap-4 mb-4"
      >
        <input type="text" className=" hidden" value={id} name="id" />
        <label className=" font-bold text-white text-lg">Title</label>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={product.title}
          name="title"
        />
        <label className=" font-bold text-white text-lg">Category</label>
        <select
          className=" border-gray-600 border outline-none w-full rounded-md p-3   -bg--bg"
          name="category"
          id="cat"
        >
          <option className=" -bg--bgSoft" value={product.category}>
            Choose a category
          </option>
          <option className=" -bg--bgSoft" value="Electronics">
            Electronics
          </option>
          <option className=" -bg--bgSoft" value="kitchen">
            Kitchen
          </option>
        </select>
        <label className=" font-bold text-white text-lg">Price</label>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="number"
          placeholder={product.price}
          name="price"
        />
        <label className=" font-bold text-white text-lg">Stock</label>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="number"
          placeholder={product.stock}
          name="stock"
        />
        <label className=" font-bold text-white text-lg">Color</label>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={product.color}
          name="color"
        />
        <label className=" font-bold text-white text-lg">Size</label>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={product.size}
          name="size"
        />
        <label className=" font-bold text-white text-lg">Description</label>
        <textarea
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          cols={10}
          placeholder={product.description}
          name="description"
        />

        <button
          type="submit"
          className=" -text--text bg-teal-700  w-full mt-3 p-3 hover:opacity-85"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default SingleProductViewPage;
