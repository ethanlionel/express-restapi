const express = require("express");
const router = express.Router();
const {
  getAllMahasiswa,
  getMahasiswa,
  createMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
} = require("../controllers/mahasiswaController");

router.get("/", getAllMahasiswa);

router.get("/:id", getMahasiswa);

router.post("/", createMahasiswa);

router.patch("/:id", updateMahasiswa);

router.delete("/:id", deleteMahasiswa);

module.exports = router;
