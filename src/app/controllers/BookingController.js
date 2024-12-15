const Book = require("../models/Booking");

class BookingController {
  // [GET] new
  async index(req, res, next) {
    Book.find({})
      .then((books) => res.render("home", { books }))
      .catch(next);
  }
}

module.exports = new BookingController();
