const express = require("express");
const router = express.Router();

const charactersController = require("../controllers/characters-controller");

const protect = require("../middleware/authMiddleware");

router.use(protect);

router.route("/characters").get(charactersController.getCharacters);

module.exports = router;
