const express = require("express");
const {
  sendMessage,
  getConversation,
} = require("../controllers/message.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/send", verifyToken, sendMessage);
router.get("/conversation/:userId", verifyToken, getConversation);

module.exports = router;
