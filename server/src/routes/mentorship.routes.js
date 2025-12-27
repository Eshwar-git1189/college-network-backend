const express = require("express");
const {
  createRequest,
  getRequestsForUser,
  updateRequestStatus,
} = require("../controllers/mentorship.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", verifyToken, createRequest);
router.get("/", verifyToken, getRequestsForUser);
router.patch("/:id", verifyToken, updateRequestStatus);

module.exports = router;
