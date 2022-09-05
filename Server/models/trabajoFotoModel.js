import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'
import { Trabajo } from './trabajoModel.js'

const TrabajoFoto = loadSequelize.define(
  'TrabajoFotos',
  {
    url: DataTypes.STRING(150),
    IdTrabajo: {
      type: DataTypes.INTEGER,
      field: 'TrabajoId',
      references: {
        model: Trabajo,
        key: 'id',
      },
    },
  },
  { tableName: 'TrabajoId', timestamps: false }
)

Trabajo.hasMany(TrabajoFoto)
TrabajoFoto.belongsTo(Trabajo)
