import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Siswa = db.define('siswa', {
  ID_Siswa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nama_Depan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Nama_Belakang: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Tempat_Lahir: {
      type: DataTypes.STRING(50)
    },
    Tanggal_Lahir: {
      type: DataTypes.DATE
    },
    Jenis_Kelamin: {
      type: DataTypes.STRING(10)
    },
    Alamat: {
      type: DataTypes.TEXT
    },
    Nomor_Telepon: {
      type: DataTypes.STRING(15)
    },
    Email: {
      type: DataTypes.STRING(100)
    },
    Nomor_Induk_Siswa: {
      type: DataTypes.STRING(20),
      unique: true
    },
    Tahun_Masuk: {
      type: DataTypes.INTEGER
    },
    Status_Pendaftaran: {
      type: DataTypes.STRING(20)
    }
}, {
  freezeTableName: true
})

export default Siswa;

(async () => {
  await db.sync();
})();