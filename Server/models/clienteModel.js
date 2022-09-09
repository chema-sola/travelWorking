import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'

export const Clientes = loadSequelize.define(
  'Cliente',
  {
    dni: DataTypes.STRING(10),
    email: DataTypes.STRING(150),
    nombre: DataTypes.STRING(150),
    apellidos: DataTypes.STRING(150),
    edad: DataTypes.DATEONLY(),
    telefono: DataTypes.STRING(9),
    foto: DataTypes.STRING(150),
    password: DataTypes.STRING(150),
    pais: DataTypes.STRING(100),
    ciudad: DataTypes.STRING(150),
    cpostal: DataTypes.STRING(10),
    direccion: DataTypes.STRING(150),
    rol: DataTypes.STRING(100),
    idioma: DataTypes.TEXT(),
  },
  { tableName: 'Clientes', timestamps: false }
)
