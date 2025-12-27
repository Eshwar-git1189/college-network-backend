const MentorshipRequest = require("../models/mentorshipRequest");

exports.createRequest = async (req, res) => {
  try {
    const mentee = req.userid;
    const { mentor, domain, message } = req.body;
    if (!mentor || !domain)
      return res.status(400).json({ error: "mentor and domain required" });

    const reqDoc = await MentorshipRequest.create({
      mentee,
      mentor,
      domain,
      message,
      initiatedBy: "mentee",
    });
    res.status(201).json(reqDoc);
  } catch (err) {
    res.status(500).json({ error: "Create mentorship request failed" });
  }
};

exports.getRequestsForUser = async (req, res) => {
  try {
    const userId = req.userid;
    const asMentor = await MentorshipRequest.find({ mentor: userId })
      .sort({ createdAt: -1 })
      .populate("mentee mentor", "name email role");
    const asMentee = await MentorshipRequest.find({ mentee: userId })
      .sort({ createdAt: -1 })
      .populate("mentee mentor", "name email role");
    res.json({ asMentor, asMentee });
  } catch (err) {
    res.status(500).json({ error: "Fetch mentorship requests failed" });
  }
};

exports.updateRequestStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    if (!["pending", "accepted", "rejected", "closed"].includes(status))
      return res.status(400).json({ error: "invalid status" });

    const item = await MentorshipRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: "Request not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Update request failed" });
  }
};
