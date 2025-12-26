const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const eventRoutes = require("./routes/event.routes");

const app = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

module.exports = app;
