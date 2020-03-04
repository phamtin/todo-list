const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const errorHandler = require("./controller/errorController");

const userRoutes = require("./routes/userRoute");
const todolistRoute = require("./routes/todolistRoute");

const app = express();

//  GLOBAL MIDDLEWARE
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(`${__dirname}/public`));
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(xss());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "Authorization"
  );
  next();
});

// ROUTES
app.use("/", userRoutes);
app.use("/panel", todolistRoute);
// app.use(errorHandler);

module.exports = app;
