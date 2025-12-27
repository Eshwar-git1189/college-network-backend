const User = require("../models/user");
const StudentProfile = require("../models/profiles/student");
const AlumniProfile = require("../models/profiles/alumni");

exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userid).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    let profile = null;
    if (user.role === "student") {
      profile = await StudentProfile.findOne({ userId: user._id });
    } else if (user.role === "alumni") {
      profile = await AlumniProfile.findOne({ userId: user._id });
    }

    res.json({ user, profile });
  } catch (err) {
    res.status(500).json({ error: "Fetch profile failed" });
  }
};

exports.upsertProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userid);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.role === "student") {
      const data = req.body;
      const profile = await StudentProfile.findOneAndUpdate(
        { userId: user._id },
        { ...data, userId: user._id },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
    }

    if (user.role === "alumni") {
      const data = req.body;
      const profile = await AlumniProfile.findOneAndUpdate(
        { userId: user._id },
        { ...data, userId: user._id },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
    }

    res.status(400).json({ error: "Profile type not supported for this role" });
  } catch (err) {
    res.status(500).json({ error: "Upsert profile failed" });
  }
};

exports.getProfileByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    let profile = null;
    if (user.role === "student")
      profile = await StudentProfile.findOne({ userId });
    if (user.role === "alumni")
      profile = await AlumniProfile.findOne({ userId });

    res.json({ user, profile });
  } catch (err) {
    res.status(500).json({ error: "Fetch profile failed" });
  }
};
