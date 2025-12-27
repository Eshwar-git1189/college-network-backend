const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const eventRoutes = require("./routes/event.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const connectionRoutes = require("./routes/connection.routes");
const messageRoutes = require("./routes/message.routes");
const feedRoutes = require("./routes/feed.routes");
const profileRoutes = require("./routes/profile.routes");
const uploadRoutes = require("./routes/upload.routes");
const roadmapRoutes = require("./routes/roadmap.routes");
const mentorshipRoutes = require("./routes/mentorship.routes");
const clubRoutes = require("./routes/club.routes");

const app = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/connections", connectionRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/feed", feedRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/upload", uploadRoutes);

// serve uploaded files
app.use(
  "/uploads",
  require("express").static(require("path").join(__dirname, "../uploads"))
);

app.use("/api/roadmaps", roadmapRoutes);
app.use("/api/mentorship", mentorshipRoutes);
app.use("/api/clubs", clubRoutes);

module.exports = app;
