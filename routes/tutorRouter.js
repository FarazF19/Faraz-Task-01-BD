const { getAllTutors, createTutor, deleteTutor } = require("../controllers/tutorController");
var { TutorValidate } = require("../middlewares/tutor");
const router = require("express").Router();



router.get('/getAll', getAllTutors);

router.post("/create", TutorValidate, createTutor);

router.delete("/delete", deleteTutor);

module.exports = router;