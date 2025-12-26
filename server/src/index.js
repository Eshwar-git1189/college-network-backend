// const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection established");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) =>
    console.log("Database connection error:", err.message)
  );
