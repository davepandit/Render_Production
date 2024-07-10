import User from "../models/user.js";
export const getUsers = async (req, res) => {
  try {
    const response = await User.find({});
    // this res is an array of objects
    if (response.length == 0) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      return res.status(200).json({
        message: response,
      });
    }
  } catch (error) {
    console.log("Something went wrong in the user controller:", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};
