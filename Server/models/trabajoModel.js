import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'
import { Clientes } from './clienteModel.js'
import { TrabajosClientes } from './trabajoCliente.js'

export const Trabajo = loadSequelize.define(
  'Trabajos',
  {
    estrellas: DataTypes.INTEGER(),
    disponibilidadinicial: DataTypes.DATEONLY(),
    disponibilidadfinal: DataTypes.DATEONLY(),
    descripcion: DataTypes.TEXT(),
    ayuda: DataTypes.TEXT(),
    idioma: DataTypes.TEXT(),
    residencia: DataTypes.TEXT(),
    otros: DataTypes.TEXT(),
    viajerosMinimo: DataTypes.TEXT(),
    horasdia: DataTypes.TEXT(),
    alojamiento: DataTypes.TEXT(),
    image: DataTypes.STRING(250),
    ClienteId: {
      type: DataTypes.INTEGER,
      field: 'ClienteId',
      references: {
        model: Clientes,
        key: 'id',
      },
    },
    titulo: DataTypes.STRING(250),
  },
  { tableName: 'Trabajos', timestamps: false }
)

Clientes.hasMany(Trabajo)
Trabajo.belongsTo(Clientes)
