const Joi = require("joi");

const objectId = Joi.string().pattern(/^[0-9a-fA-F]{24}$/);

exports.createFeedSchema = Joi.object({
  type: Joi.string()
    .valid("announcement", "event", "club", "department", "other")
    .optional(),
  title: Joi.string().max(200).required(),
  content: Joi.string().max(10000).allow("", null).optional(),
  relatedId: objectId.optional().allow(null),
  targetAudience: Joi.array().items(Joi.string()).optional(),
  attachments: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().uri({ allowRelative: true }).required(),
        mimeType: Joi.string().optional().allow(""),
        filename: Joi.string().optional().allow(""),
      })
    )
    .max(5)
    .optional(),
});

exports.updateFeedSchema = Joi.object({
  type: Joi.string()
    .valid("announcement", "event", "club", "department", "other")
    .optional(),
  title: Joi.string().max(200).optional(),
  content: Joi.string().max(10000).allow("", null).optional(),
  relatedId: objectId.optional().allow(null),
  targetAudience: Joi.array().items(Joi.string()).optional(),
  attachments: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().uri({ allowRelative: true }).required(),
        mimeType: Joi.string().optional().allow(""),
        filename: Joi.string().optional().allow(""),
      })
    )
    .max(5)
    .optional(),
});
