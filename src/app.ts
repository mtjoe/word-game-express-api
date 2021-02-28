import createError = require("http-errors");
import express = require("express");
import path = require("path");
import cookieParser = require("cookie-parser");
import logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();
const port = 8080;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
