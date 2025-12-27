const Joi = require("joi");

exports.validateBody = (schema) => (req, res, next) => {
  const body = req.body || {};
  const { error, value } = schema.validate(body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const details = error.details.map((d) => d.message);
    return res.status(400).json({ error: "Validation failed", details });
  }
  req.body = value;
  next();
};
