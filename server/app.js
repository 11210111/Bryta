const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routes/auth");
const actorRouter = require("./routes/actor");
const morgan = require("morgan");

const app = express();

require("dotenv").config();
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser("secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use("/auth", authRouter);
app.use("/actor", actorRouter);

module.exports = app;

// static
