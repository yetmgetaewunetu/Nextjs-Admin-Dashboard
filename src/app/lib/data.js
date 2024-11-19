const { User, Product } = require("./models");
const { dbConnection } = require("./utils");

export const fetchData = async (q, page) => {
  dbConnection();
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 2;
  try {
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
export const fetchProducts = async (q, page) => {
  dbConnection();
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 2;
  try {
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
