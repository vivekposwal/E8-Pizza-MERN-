const Pizza = require("../modals/pizzaModal");

const asyncHandler = require("express-async-handler");
const getPizzas = asyncHandler(async (req, res) => {
  const pizzas = await Pizza.find({});
  res.json(pizzas);
});
module.exports = { getPizzas };
