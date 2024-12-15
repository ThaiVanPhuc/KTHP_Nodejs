const bookingRouter = require("./booking");

function route(app) {
  app.use("/", bookingRouter);
}

module.exports = route;
