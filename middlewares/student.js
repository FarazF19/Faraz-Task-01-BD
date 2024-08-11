const express = require("express");
const Joi = require("joi");

const StudentValidate = async (req, res, next) => {
    const studentSchema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),

        RollNo: Joi.string().alphanum().min(8).max(12).required(),

        password: Joi.string().alphanum().min(8).max(32).required(),
    });

    try {
        await studentSchema.validateAsync(req.body);
        next();
    } catch (err) {
        return res.send(err);
    }
    next();
};

module.exports = {
    StudentValidate,
};
