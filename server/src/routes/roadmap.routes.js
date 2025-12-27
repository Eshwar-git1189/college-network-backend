const express = require("express");
const {
  createRoadmap,
  getRoadmaps,
  getRoadmapById,
  updateRoadmap,
  deleteRoadmap,
} = require("../controllers/roadmap.controller");
const { verifyToken, requireRole } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", verifyToken, requireRole("faculty", "admin"), createRoadmap);
router.get("/", getRoadmaps);
router.get("/:id", getRoadmapById);
router.patch(
  "/:id",
  verifyToken,
  requireRole("faculty", "admin"),
  updateRoadmap
);
router.delete(
  "/:id",
  verifyToken,
  requireRole("faculty", "admin"),
  deleteRoadmap
);

module.exports = router;
