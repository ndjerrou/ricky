const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");
const protect = require("../middleware/authMiddleware");

router.post("/signup", usersController.signup);
router.post("/signin", usersController.signin);
router.post("/signout", protect, usersController.signout);

module.exports = router;
