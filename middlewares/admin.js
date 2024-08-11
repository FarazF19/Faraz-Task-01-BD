const express = require("express");
const Joi = require("joi");

const AdminValidate = async (req, res, next) => {
    const AdminSchema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),

        Role: Joi.string().min(5).max(10).required(),

        password: Joi.string().alphanum().min(8).max(32).required(),
    });

    try {
        await AdminSchema.validateAsync(req.body);
        next();
    } catch (err) {
        return res.send(err);
    }
    next();
};

module.exports = {
    AdminValidate,
};
