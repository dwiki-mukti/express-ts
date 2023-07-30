import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nama: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: [true, "Data Harus di Isi"],
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ['Mahasiswa', 'Kemahasiswaan', 'Unit_Kegiatan', 'Tenaga_Kesehatan'],
        default: 'Mahasiswa',
    },
    mahasiswa: {
        nrp: String,
        status: String,
        alamat: String,
        angkatan: String,
        kelas: String,
    },
    kemahasiswaan: {
        nip: String,
        jabatan: String,
    },
    kesehatan: {
        foto: String,
        jabatan: String
    }
}, { timestamps: true });

export default mongoose.model('User', schema);