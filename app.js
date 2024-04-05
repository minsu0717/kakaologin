require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routers = require("./src/routers");

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(morgan("combined"));
  app.use(express.json());
  app.use(routers);

  app.get("/ping", (req, res, next) => {
    res.status(200).json({ message: "pong" });
  });

  app.all("*", (req, res, next) => {
    const err = new Error(`Can't fine ${req.originalUrl} on this server!`);

    err.statusCode = 404;

    next(err);
  });

  return app;
};

module.exports = { createApp };
