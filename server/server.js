const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mahasiswaRoute = require("./routes/mahasiswaRoute");

const PORT = process.env.PORT || 3000;

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/mahasiswa", mahasiswaRoute);

// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
