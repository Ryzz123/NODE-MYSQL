import {Mahasiswa, Prodi} from "../models/UserModel.js";

// ===================== [GET DATA MAHASISWA] ==========================

// Ambil semua data mahasiswa
export const getMahasiswa = async (req, res) => {
    try {
        const response = await Mahasiswa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// Ambil data mahasiswa berdasarkan id mahasiswa
export const getMahasiswaById = async (req, res) => {
    try {
        const response = await Prodi.findOne({
            include: [{model: Mahasiswa, attributes: ['id','name','npm','email','prodiId'], where: {id: req.params.id}}]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// ===================== [GET DATA PRODI] ==========================

// Ambil semua data prodi
export const getProdi = async (req, res) => {
    try {
        const response = await Prodi.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// ambil data prodi berdasarkan mahasiswa punya id
export const getProdiAllById = async (req, res) => {
    try {
        const response = await Prodi.findOne({
            include: [{model: Mahasiswa, attributes: ['id','name','npm','email','prodiId'], where: {prodiId: req.params.id}}]
        })
        res.status(201).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// ===================== [JOIN TABEL] ==========================

// Ambil data mahasiswa dan prodi
export const getMahasiswaProdi = async (req, res) => {
    try {
        const response = await Mahasiswa.findAll({
            include: [{model: Prodi, attributes: ['prodi']}]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// ambil data mahasiswa dan prodi berdasarkan id prodinya
export const getMahasiswaProdiById = async (req, res) => {
    try {
        const response = await Mahasiswa.findAll({
            include: [{model: Prodi, attributes: ['prodi'], where: {id: req.params.id}}]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// ===================== [SAVE DATA] ==========================

export const addMahasiswa = async (req, res) => {
    try {
        await Mahasiswa.create(req.body);
        res.status(201).json({message: "Succes add Mahasiswa"});
    } catch (error) {
        console.log(error.message);
    }
}

export const addProdi = async (req, res) => {
    try {
        await Prodi.create(req.body);
        res.status(201).json({message: "Success add prodi"});
    } catch (error) {
        console.log(error.message);
    }
}

// ===================== [UPDATE DATA MAHASISWA] ==========================
export const updateMahasiswaById = async (req, res) => {
    try {
        await Mahasiswa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Success update data mahasiswa"});
    } catch (error) {
        console.log(error.message);
    }
}

// ===================== [DELETE DATA MAHASISWA] ==========================
export const deleteMahasiswaById = async (req, res) => {
    try {
        await Mahasiswa.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Success deleted mahasiswa"});
    } catch (error) {
        console.log(error.message);
    }
}