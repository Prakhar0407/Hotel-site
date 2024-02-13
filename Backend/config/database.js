const mongoose = require("mongoose");
require("dotenv").config();
MONGODB_URL = "";
exports.connect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
      console.log("DB connection failed");
      console.log(error);
      process.exit(1);
    });
};
