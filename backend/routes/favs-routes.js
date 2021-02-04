const express = require("express");
const favController = require("../controllers/favs-controller");

const router = express.Router();

router.route("/favs").post(favController.addFav);

module.exports = router;
