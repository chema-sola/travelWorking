import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'
import { Clientes } from './clienteModel.js'
import { Idioma } from './idiomasModel.js'

export const IdiomasClientes = loadSequelize.define(
  'idiomasClientes',
  {
    nivel: DataTypes.STRING(100),
    IdiomaId: {
      type: DataTypes.INTEGER,
      field: 'IdiomaId',
      references: {
        model: Idioma,
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
  { tableName: 'idiomasClientes', timestamps: false }
)

// Facturas.belongsToMany(Articulos, { through: Articulos_Facturas })
// Articulos.belongsToMany(Facturas, { through: Articulos_Facturas })

// Setup a One-to-Many relationship between User and Grant
// Facturas.hasMany(Articulos_Facturas)
// Articulos_Facturas.belongsTo(Facturas)

// Also setup a One-to-Many relationship between Profile and Grant
// Articulos.hasMany(Articulos_Facturas)
// Articulos_Facturas.belongsTo(Articulos)

// Facturas.hasMany(Articulos_Facturas, { foreignKey: 'FacturaId' })
// Articulos.hasMany(Articulos_Facturas, { foreignKey: 'ArticuloId' })
