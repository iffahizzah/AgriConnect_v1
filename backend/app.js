const express = require("express");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); //so we can call api from anywhere in the world after deployed
app.use("/", express.static("uploads")); //so we can access the uploads folder globally
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

const user = require("./controller/user");

app.use("/api/v2/user", user);

//For error handling
app.use(ErrorHandler);

module.exports = app;
