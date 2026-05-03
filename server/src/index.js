const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser");
require("dotenv").config();


require("./connection");

// const app1 = require("./app");
// const http = require("http");

const UserRoutes = require('./routes/user')
app.use('/api/auth',UserRoutes)

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
