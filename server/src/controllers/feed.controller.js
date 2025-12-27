const Feed = require("../models/feed");

exports.createFeed = async (req, res) => {
  try {
    const author = req.userid;
    const { type, title, content, relatedId, targetAudience } = req.body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return res.status(400).json({ error: "title required" });
    }

    if (content && content.length > 10000) {
      return res.status(400).json({ error: "content too long" });
    }

    const allowedTypes = [
      "announcement",
      "event",
      "club",
      "department",
      "other",
    ];
    if (type && !allowedTypes.includes(type)) {
      return res.status(400).json({ error: "invalid type" });
    }

    // attachments can come from multipart uploads (req.files) or from body as array of {url,mimeType}
    let attachments = [];
    if (req.files && Array.isArray(req.files)) {
      attachments = req.files.map((f) => ({
        url: `/uploads/${f.filename}`,
        mimeType: f.mimetype,
        filename: f.originalname,
      }));
    } else if (req.body.attachments) {
      try {
        const parsed =
          typeof req.body.attachments === "string"
            ? JSON.parse(req.body.attachments)
            : req.body.attachments;
        if (Array.isArray(parsed))
          attachments = parsed.map((a) => ({
            url: a.url,
            mimeType: a.mimeType || "",
            filename: a.filename || "",
          }));
      } catch (e) {
        // ignore parse errors
      }
    }

    if (attachments.length > 5)
      return res.status(400).json({ error: "too many attachments (max 5)" });

    const feed = await Feed.create({
      type,
      title: title.trim(),
      content,
      relatedId,
      targetAudience,
      author,
      attachments,
    });

    res.status(201).json(feed);
  } catch (err) {
    res.status(500).json({ error: "Create feed failed" });
  }
};

exports.getFeed = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "20", 10);
    const skip = (page - 1) * limit;

    const items = await Feed.find({ isActive: true })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("author", "name email role");

    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Fetch feed failed" });
  }
};

exports.updateFeed = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const item = await Feed.findByIdAndUpdate(id, data, { new: true });
    if (!item) return res.status(404).json({ error: "Feed item not found" });

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Update feed failed" });
  }
};

exports.deleteFeed = async (req, res) => {
  try {
    const id = req.params.id;

    const item = await Feed.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: "Feed item not found" });

    res.json({ message: "Feed item deactivated", item });
  } catch (err) {
    res.status(500).json({ error: "Delete feed failed" });
  }
};
