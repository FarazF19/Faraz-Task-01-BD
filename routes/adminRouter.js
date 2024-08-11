const { getAdmins, createAdmin, deleteAdmin } = require("../controllers/adminController")
var { AdminValidate } = require("../middlewares/admin")
const router = require("express").Router();



router.get('/getAll', getAdmins);

router.post("/create", AdminValidate, createAdmin);

router.delete("/delete", deleteAdmin)

module.exports = router;