const express = require("express");
const multer = require("multer");
const path = require("path");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [".png", ".jpg", ".jpeg", ".gif", ".pdf", ".mp4", ".mov"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) cb(null, true);
  else cb(new Error("Unsupported file type"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.post("/feed", verifyToken, upload.array("files", 5), (req, res) => {
  // returns uploaded file metadata
  const files = (req.files || []).map((f) => ({
    url: `/uploads/${f.filename}`,
    mimeType: f.mimetype,
    filename: f.originalname,
  }));
  res.json({ files });
});

module.exports = router;
