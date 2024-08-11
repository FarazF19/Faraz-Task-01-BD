const express = require("express");

const getAdmins = (req, res) => {
    try {
        return res.send({
            response: "Admins List"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

const createAdmin = (req, res) => {
    try {
        return res.send({
            response: "Admin Created Successfully!"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

const deleteAdmin = (req, res) => {
    try {
        return res.send({
            response: "Admin Deleted Successfully!"
        });
    } catch (error) {
        return res.send({
            error: error,
        });
    }
}

module.exports = {
    getAdmins,
    createAdmin,
    deleteAdmin
}