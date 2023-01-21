import express from "express";
import { addMahasiswa, addProdi, getMahasiswa, getProdiAllById, getMahasiswaProdi, getMahasiswaProdiById, getProdi, getMahasiswaById, updateMahasiswaById, deleteMahasiswaById } from "../controllers/MahasiswaController.js";

const router = express.Router();

// ambil data dari mysqlnya
router.get("/mahasiswa", getMahasiswa);
router.get("/mahasiswa/data/:id", getMahasiswaById);

// ambil data prodi
router.get("/prodi", getProdi);
router.get("/prodi/data/:id", getProdiAllById);

// relasi keduanya
router.get("/mahasiswa/prodi", getMahasiswaProdi);
// ambil semua data keduanya berdasarkan id prodi punya id
router.get("/mahasiswa/prodi/:id", getMahasiswaProdiById);

// save data mahasiswa
router.post("/mahasiswa", addMahasiswa);
// save data prodi
router.post("/prodi", addProdi);

// update data mahasiswa
router.patch("/mahasiswa/:id", updateMahasiswaById);

// delete data mahasiswa
router.delete("/mahasiswa/:id", deleteMahasiswaById);

export default router;
