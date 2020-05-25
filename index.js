const express = require("express");
const server = express();
const mongoose = require("mongoose");
//const morgan = require("morgan");
const cors = require("cors");

//server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
//server.use("/", (req, res) => console.log("Hi"));

const yogaPoseRouter = require("./routes/yogaPose.router");
server.use("/api", yogaPoseRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running  localhost:${port}`));

mongoose.connect("mongodb://localhost:27017/yogaDb", { useFindAndModify: false },(err) => {
  if (!err) {
    console.log("Connected Successfully");
  }
});
