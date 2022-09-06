import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'

export const Idioma = loadSequelize.define(
  'idiomas',
  {
    idioma: DataTypes.STRING(100),
  },
  { tableName: 'idiomas', timestamps: false }
)
