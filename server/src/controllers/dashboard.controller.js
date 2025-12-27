const User = require("../models/user");
const Event = require("../models/event");

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.userid;

    // basic user info
    const user = await User.findOne(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // example: recent events (you can refine later)
    const events = await Event.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      message: "Dashboard data",
      user,
      recentEvents: events
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load dashboard" });
  }
};
