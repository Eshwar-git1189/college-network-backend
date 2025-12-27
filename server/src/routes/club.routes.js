const express = require("express");
const {
  createClub,
  getClubs,
  getClub,
  joinClub,
  leaveClub,
  updateClub,
  deleteClub,
} = require("../controllers/club.controller");
const { verifyToken, requireRole } = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/",
  verifyToken,
  requireRole("club_admin", "faculty", "admin"),
  createClub
);
router.get("/", getClubs);
router.get("/:id", getClub);
router.post("/:id/join", verifyToken, joinClub);
router.post("/:id/leave", verifyToken, leaveClub);
router.patch(
  "/:id",
  verifyToken,
  requireRole("club_admin", "faculty", "admin"),
  updateClub
);
router.delete(
  "/:id",
  verifyToken,
  requireRole("club_admin", "faculty", "admin"),
  deleteClub
);

module.exports = router;
