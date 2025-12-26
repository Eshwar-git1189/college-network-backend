const Event = require("../models/event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      organizedBy: req.userid
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: "Event creation failed" });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};
