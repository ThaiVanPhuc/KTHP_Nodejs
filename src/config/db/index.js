const { default: mongoose } = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/booking-system")
      .then(() => console.log("Connected!"));
  } catch (error) {
    console.log("Fail connect");
  }
}

module.exports = { connect };
