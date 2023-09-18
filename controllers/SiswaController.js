import Siswa from "../models/SiswaModel.js";

export const getSiswa = (async (req, res) => {
  try {
    const response = await Siswa.findAll();
    res.json(response)
  } catch (error) {
    console.log(error.message);
  }
});

