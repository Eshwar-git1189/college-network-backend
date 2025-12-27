const express = require("express");
const {
  createFeed,
  getFeed,
  updateFeed,
  deleteFeed,
} = require("../controllers/feed.controller");
const { verifyToken, requireRole } = require("../middleware/auth.middleware");
const { validateBody } = require("../middleware/validate.middleware");
const {
  createFeedSchema,
  updateFeedSchema,
} = require("../validators/feed.validator");

const router = express.Router();

router.post(
  "/",
  verifyToken,
  requireRole("faculty", "placement_coordinator", "club_admin", "admin"),
  validateBody(createFeedSchema),
  createFeed
);
router.get("/", getFeed);
router.patch(
  "/:id",
  verifyToken,
  requireRole("faculty", "placement_coordinator", "club_admin", "admin"),
  validateBody(updateFeedSchema),
  updateFeed
);
router.delete(
  "/:id",
  verifyToken,
  requireRole("faculty", "placement_coordinator", "club_admin", "admin"),
  deleteFeed
);

module.exports = router;
