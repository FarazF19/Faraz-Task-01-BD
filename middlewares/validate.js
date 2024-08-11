const express = require("express");
const Joi = require("joi");

const UserValidate = async (req, res, next) => {
  const Userschema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().alphanum().min(8).max(32).required(),
  });

  try {
    await Userschema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.send(err);
  }
  next();
};

module.exports = {
  UserValidate,
};
