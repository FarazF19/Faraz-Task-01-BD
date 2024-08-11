const { getAllStudents, createStudent, deleteStudent } = require("../controllers/studentController");
var { StudentValidate } = require("../middlewares/student");

const router = require("express").Router();



router.get('/getAll', getAllStudents);

router.post("/create", StudentValidate, createStudent);

router.delete("/delete", deleteStudent)

module.exports = router;