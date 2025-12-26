const jwt = require("jsonwebtoken");

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
