const express = require("express");

const getAllTutors = (req, res) => {
    try {
        return res.send({
            response: "All Tutors List"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

const createTutor = (req, res) => {
    try {
        return res.send({
            response: "Tutor Created Successfully!"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

const deleteTutor = (req, res) => {
    try {
        return res.send({
            response: "Tutor Deleted Successfully!"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

module.exports = {
    getAllTutors,
    createTutor,
    deleteTutor,
}