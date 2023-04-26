const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mahasiswaSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    nim: {
      type: Number,
      required: true,
    },
    domisili: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);
