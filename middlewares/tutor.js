const express = require("express");
const Joi = require("joi");

const TutorValidate = async (req, res, next) => {
    const tutorSchema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),

        LMSID: Joi.string().alphanum().min(6).max(12).required(),

        password: Joi.string().alphanum().min(8).max(32).required(),
    });

    try {
        await tutorSchema.validateAsync(req.body);
        next();
    } catch (err) {
        return res.send(err);
    }
    next();
};

module.exports = {
    TutorValidate,
};
