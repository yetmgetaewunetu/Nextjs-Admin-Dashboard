const { User } = require("./models");
const { dbConnection } = require("./utils");

const fetchData = async (q) => {
  dbConnection();
  const regex = new RegExp(q, "i");
  try {
    const users = User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

export { fetchData };
