const Message = require("../models/message");

exports.sendMessage = async (req, res) => {
  try {
    const sender = req.userid;
    const { receiver, content } = req.body;

    if (!receiver || !content)
      return res.status(400).json({ error: "receiver and content required" });

    const msg = await Message.create({ sender, receiver, content });

    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: "Send message failed" });
  }
};

exports.getConversation = async (req, res) => {
  try {
    const userId = req.userid;
    const other = req.params.userId;

    const msgs = await Message.find({
      $or: [
        { sender: userId, receiver: other },
        { sender: other, receiver: userId },
      ],
    }).sort({ createdAt: 1 });

    res.json(msgs);
  } catch (err) {
    res.status(500).json({ error: "Fetch conversation failed" });
  }
};
