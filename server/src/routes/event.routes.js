const express = require("express");
const {
  createEvent,
  getEvents
} = require("../controllers/event.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", verifyToken, createEvent);
router.get("/", getEvents);

module.exports = router;
