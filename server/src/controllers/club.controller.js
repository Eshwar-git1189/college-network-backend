const Club = require("../models/club");

exports.createClub = async (req, res) => {
  try {
    const data = req.body;
    if (!data.name || !data.description)
      return res.status(400).json({ error: "name and description required" });

    const existing = await Club.findOne({ name: data.name });
    if (existing)
      return res
        .status(409)
        .json({ error: "Club with this name already exists" });

    const club = await Club.create({ ...data });
    res.status(201).json(club);
  } catch (err) {
    res.status(500).json({ error: "Create club failed" });
  }
};

exports.getClubs = async (req, res) => {
  try {
    const clubs = await Club.find({ isActive: true }).sort({ name: 1 });
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: "Fetch clubs failed" });
  }
};

exports.getClub = async (req, res) => {
  try {
    const id = req.params.id;
    const club = await Club.findById(id).populate(
      "leads members facultyAdvisor",
      "name email role"
    );
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.json(club);
  } catch (err) {
    res.status(500).json({ error: "Fetch club failed" });
  }
};

exports.joinClub = async (req, res) => {
  try {
    const userId = req.userid;
    const clubId = req.params.id;
    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ error: "Club not found" });
    if (!club.members.includes(userId)) club.members.push(userId);
    await club.save();
    res.json({ message: "Joined club", club });
  } catch (err) {
    res.status(500).json({ error: "Join club failed" });
  }
};

exports.leaveClub = async (req, res) => {
  try {
    const userId = req.userid;
    const clubId = req.params.id;
    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ error: "Club not found" });
    club.members = club.members.filter((m) => m.toString() !== userId);
    await club.save();
    res.json({ message: "Left club", club });
  } catch (err) {
    res.status(500).json({ error: "Leave club failed" });
  }
};

exports.updateClub = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const club = await Club.findByIdAndUpdate(id, data, { new: true });
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.json(club);
  } catch (err) {
    res.status(500).json({ error: "Update club failed" });
  }
};

exports.deleteClub = async (req, res) => {
  try {
    const id = req.params.id;
    const club = await Club.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.json({ message: "Club deactivated", club });
  } catch (err) {
    res.status(500).json({ error: "Delete club failed" });
  }
};
