const Mahasiswa = require("../models/mahasiswaModel");

const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find().sort({ createdAt: -1 });

    return res.status(200).json(mahasiswa);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getMahasiswa = async (req, res) => {
  const { id } = req.params;

  try {
    const mahasiswa = await Mahasiswa.findById(id);

    if (!mahasiswa) {
      return res.status(404).json({ error: "Data mahasiswa tidak ada" });
    }

    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(404).json({ error: "Data mahasiswa tidak ada" });
  }
};

const createMahasiswa = async (req, res) => {
  const { nama, nim, domisili } = req.body;

  try {
    const existingMahasiswa = await Mahasiswa.findOne({ nim });
    if (!existingMahasiswa) {
      const mahasiswa = await Mahasiswa.create({ nama, nim, domisili });
      return res.status(200).json(mahasiswa);
    }
    res.status(400).json({ mssg: "Data sudah ada" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateMahasiswa = async (req, res) => {
  const { id } = req.params;

  const mahasiswa = await Mahasiswa.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  return res.status(200).json(mahasiswa);
};

const deleteMahasiswa = async (req, res) => {
  const { id } = req.params;

  try {
    const mahasiswa = await Mahasiswa.findOne({ _id: id });

    if (!mahasiswa) {
      return res.status(404).json({ mssg: "Data mahasiswa tidak ada" });
    }

    await Mahasiswa.findByIdAndDelete({ _id: id });
    res.status(200).json({ mssg: "Data mahasiswa berhasil dihapus" });
  } catch (error) {
    res
      .status(404)
      .json({ error: "ID tidak valid / Data mahasiswa tidak ada" });
  }
};

module.exports = {
  getAllMahasiswa,
  getMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
