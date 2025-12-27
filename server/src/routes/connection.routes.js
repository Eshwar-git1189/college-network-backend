const express = require("express");
const { follow, unfollow } = require("../controllers/connection.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/follow", verifyToken, follow);
router.post("/unfollow", verifyToken, unfollow);

module.exports = router;
