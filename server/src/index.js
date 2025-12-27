const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const Message = require("./models/message");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection established");

    const io = new Server(server, {
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      socket.on("join", (userId) => {
        socket.join(userId);
      });

      socket.on("private_message", async (data) => {
        try {
          // data: { sender, receiver, content }
          const { sender, receiver, content } = data;
          const msg = await Message.create({ sender, receiver, content });
          io.to(receiver).emit("private_message", msg);
          io.to(sender).emit("private_message", msg);
        } catch (err) {
          console.error("Socket message save error", err);
        }
      });
    });

    server.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Database connection error:", err.message));
