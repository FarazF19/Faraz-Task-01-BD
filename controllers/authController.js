const express = require("express");
module.exports = {
    login: (req,res)=>{
        try {
            return res.send({
                response: "Welcome: You are in!"
            });
        } catch (error) {
            return res.send({
                error: error,
            });
        }
    },

    logout: (req,res)=>{
          try {
            return res.send({
                response: "You are logged out!"
            })
          } catch (error) {
             return res.send({
                error: error, 
             })
          }
    }
}