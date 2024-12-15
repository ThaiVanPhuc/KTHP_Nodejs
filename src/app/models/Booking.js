const slug = require("mongoose-slug-updater");
const mongoose = require("mongoose");
mongoose.plugin(slug);

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
