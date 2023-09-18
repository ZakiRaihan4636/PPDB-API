import express from "express";
import { getSiswa } from "../controllers/SiswaController.js";

const router = express.Router();

router.get('/siswas', getSiswa)

export default router;