const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ error: "Token missing" });
  }

  const token = authHeader.split(" ")[1]; // Bearer token

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Unauthorized user" });
    }
    req.userid = decoded.userid;
    next();
  });
};

exports.requireRole = (...roles) => {
  return async (req, res, next) => {
    try {
      const userId = req.userid;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });

      const user = await User.findById(userId).select("role");
      if (!user) return res.status(404).json({ error: "User not found" });

      if (!roles.includes(user.role)) {
        return res.status(403).json({ error: "Insufficient permissions" });
      }

      next();
    } catch (err) {
      res.status(500).json({ error: "Role check failed" });
    }
  };
};
