const express = require("express");
const router = express.Router();
const { getPizzas } = require("../controllers/pizzaControllers");
router.route("/getAllPizzas").get(getPizzas);
module.exports = router;
