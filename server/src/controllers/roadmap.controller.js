const Roadmap = require("../models/roadmap");

exports.createRoadmap = async (req, res) => {
  try {
    const creator = req.userid;
    const { domain, description, steps } = req.body;

    if (!domain || typeof domain !== "string")
      return res.status(400).json({ error: "domain required" });

    const existing = await Roadmap.findOne({ domain });
    if (existing)
      return res
        .status(409)
        .json({ error: "Roadmap for domain already exists" });

    const roadmap = await Roadmap.create({
      domain,
      description,
      steps,
      createdBy: creator,
    });
    res.status(201).json(roadmap);
  } catch (err) {
    res.status(500).json({ error: "Create roadmap failed" });
  }
};

exports.getRoadmaps = async (req, res) => {
  try {
    const items = await Roadmap.find({ isActive: true }).sort({
      createdAt: -1,
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Fetch roadmaps failed" });
  }
};

exports.getRoadmapById = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Roadmap.findById(id);
    if (!item) return res.status(404).json({ error: "Roadmap not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Fetch roadmap failed" });
  }
};

exports.updateRoadmap = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const item = await Roadmap.findByIdAndUpdate(id, data, { new: true });
    if (!item) return res.status(404).json({ error: "Roadmap not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Update roadmap failed" });
  }
};

exports.deleteRoadmap = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Roadmap.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: "Roadmap not found" });
    res.json({ message: "Roadmap deactivated", item });
  } catch (err) {
    res.status(500).json({ error: "Delete roadmap failed" });
  }
};
