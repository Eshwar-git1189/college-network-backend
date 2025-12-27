const User = require("../models/user");

exports.follow = async (req, res) => {
  try {
    const userId = req.userid;
    const { targetId } = req.body;

    if (!targetId) return res.status(400).json({ error: "targetId required" });

    if (userId === targetId)
      return res.status(400).json({ error: "Cannot follow yourself" });

    const user = await User.findById(userId);
    const target = await User.findById(targetId);

    if (!user || !target)
      return res.status(404).json({ error: "User not found" });

    if (!user.following.includes(targetId)) user.following.push(targetId);
    if (!target.followers.includes(userId)) target.followers.push(userId);

    await user.save();
    await target.save();

    res.json({ message: "Followed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Follow failed" });
  }
};

exports.unfollow = async (req, res) => {
  try {
    const userId = req.userid;
    const { targetId } = req.body;

    if (!targetId) return res.status(400).json({ error: "targetId required" });

    const user = await User.findById(userId);
    const target = await User.findById(targetId);

    if (!user || !target)
      return res.status(404).json({ error: "User not found" });

    user.following = user.following.filter((id) => id.toString() !== targetId);
    target.followers = target.followers.filter(
      (id) => id.toString() !== userId
    );

    await user.save();
    await target.save();

    res.json({ message: "Unfollowed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Unfollow failed" });
  }
};
