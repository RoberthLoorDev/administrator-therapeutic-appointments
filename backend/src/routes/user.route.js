const { userController } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/create", userController.createUser);
router.get("/consult/:identification", userController.consultUserForIdentification);

module.exports = router;
