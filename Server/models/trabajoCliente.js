import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'
import { Trabajo } from './trabajoModel.js'
import { Clientes } from './clienteModel.js'

export const TrabajosClientes = loadSequelize.define(
  'TrabajosClientes',
  {
    TrabajoId: {
      type: DataTypes.INTEGER,
      field: 'TrabajoId',
      references: {
        model: Trabajo,
        key: 'id',
      },
    },
    ClienteId: {
      type: DataTypes.INTEGER,
      field: 'ClienteId',
      references: {
        model: Clientes,
        key: 'id',
      },
    },
  },
  { tableName: 'TrabajosClientes', timestamps: false }
)
Trabajo.belongsToMany(Clientes, { through: TrabajosClientes })
Clientes.belongsToMany(Trabajo, { through: TrabajosClientes })
Trabajo.hasMany(TrabajosClientes)
TrabajosClientes.belongsTo(Trabajo)
Clientes.hasMany(TrabajosClientes)
TrabajosClientes.belongsTo(Clientes)
