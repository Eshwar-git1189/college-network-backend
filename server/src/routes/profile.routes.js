const express = require("express");
const {
  getMyProfile,
  upsertProfile,
  getProfileByUserId,
} = require("../controllers/profile.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/me", verifyToken, getMyProfile);
router.post("/", verifyToken, upsertProfile);
router.get("/:userId", verifyToken, getProfileByUserId);

module.exports = router;
