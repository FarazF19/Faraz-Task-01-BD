var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var { UserValidate } = require("./middlewares/validate");




var authRouter = require("./routes/authRouter");
var stdRouter = require("./routes/studentRouter");
var tutorRouter = require('./routes/tutorRouter')
var adminRouter = require('./routes/adminRouter')

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routers/ middlewares
app.use("/auth", UserValidate, authRouter);
app.use('/student', stdRouter)
app.use("/tutor", tutorRouter)
app.use("/admin", adminRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
