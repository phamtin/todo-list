const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", error => {
  console.log(error.name, error.message);
  console.log("uncaught Exception, Shutting down...");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connect successfully");
  });

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log("Application is running...");
});
process.on("unhandledRejection", error => {
  console.log(error.name, error.message);
  console.log("unhandled Rejection, Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
