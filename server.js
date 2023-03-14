const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./db");
const pizzaRoutes = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
const path = require("path");
dotenv.config();
connectDB();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Server is working");
// });
app.use("/api/pizzas", pizzaRoutes);
app.use("/api/users", userRoute);
app.use("/api/orders", ordersRoute);

//DEPLOYMENT
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//app.get("/getpizzas", (req, res) => {
//Pizza.find({}, (err, docs) => {
//if (err) {
//console.log(err);
//} else {
//res.send(docs);
//}
//});
//});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
