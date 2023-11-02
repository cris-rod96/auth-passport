const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const authRoutes = require("./routes/auth.routes");
const server = express();

require("./config/passport.config");

server.use(morgan("dev"));
server.use(express.json());
server.use(
  session({
    secret: "onepiece",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
server.use(cors());
server.use(passport.initialize());
server.use(passport.session());

server.use("/auth", authRoutes);

module.exports = server;
