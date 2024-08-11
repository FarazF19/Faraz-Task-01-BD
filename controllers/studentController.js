const express = require("express");

const getAllStudents = (req, res) => {
    try {
        return res.send({
            response: "All Users List"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

const createStudent = (req, res) => {
    try {
        return res.send({
            response: "Student Created Successfully!"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

const deleteStudent = (req, res) => {
    try {
        return res.send({
            response: "Student Deleted Successfully!"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    deleteStudent
}