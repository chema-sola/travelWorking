import { response } from 'express'
import { Op } from 'sequelize'

import { Trabajo } from '../models/trabajoModel.js'
import { Clientes } from '../models/clienteModel.js'
import { TrabajosClientes } from '../models/trabajoCliente.js'

export const getTrabajos = async (req, res = response) => {
  try {
    let { keyword, page = 1, limit = 10 } = req.query
    page = page == 0 ? 1 : page
    let query = { include: Clientes, limit: Number(limit), offset: (page - 1) * limit }
    if (keyword) {
      query = {
        include: Clientes,
        where: { titulo: { [Op.like]: `%${keyword}%` } },
        limit: Number(limit),
        offset: (page - 1) * limit,
      }
    }
    const trabajo = await Trabajo.findAll(query)

    if (!trabajo) {
      return res.status(404).json({
        ok: false,
        msg: 'No se han encontrado ofertas de trabajo.',
      })
    }

    return res.status(200).json({
      ok: true,
      data: trabajo,
      msg: 'Se han encontrado ofertas de trabajo',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'No se han podido recuperar las ofertas de trabajos',
    })
  }
}

export const getITrabajoById = async (req, res = response) => {
  try {
    const { id } = req.params
    const trabajo = await Trabajo.findOne({ where: { id }, include: Clientes })

    if (!trabajo) {
      return res.status(404).json({
        ok: false,
        msg: 'No se ha encontrado ningúna oferta de trabajo.',
      })
    }

    return res.status(200).json({
      ok: true,
      data: trabajo,
      msg: 'Se ha encontrado la oferta',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'No se ha podido recuperar la oferta',
    })
  }
}

export const createTrabajo = async (req, res = response) => {
  try {
    const {
      disponibilidadinicial,
      disponibilidadfinal,
      descripcion,
      ayuda,
      idioma,
      residencia,
      otros,
      viajerosMinimo,
      horasdia,
      ClienteId, // quien ha publicado la oferta
      titulo,
      alojamiento,
    } = req.body

    if (new Date(disponibilidadinicial) >= new Date(disponibilidadfinal)) {
      return res.status(500).json({
        ok: false,
        msg: 'La fecha fin ha de ser mayor a la fecha inicio.',
      })
    }

    const trabajo = await Trabajo.create({
      disponibilidadinicial,
      disponibilidadfinal,
      descripcion,
      ayuda,
      idioma,
      residencia,
      otros,
      viajerosMinimo,
      horasdia,
      ClienteId,
      titulo,
      alojamiento,
    })

    return res.status(200).json({
      ok: true,
      data: trabajo,
      msg: 'Oferta de trabajo creado correctamente',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'La oferta de trabajo no se ha podido crear',
    })
  }
}

export const updateTrabajo = async (req, res = response) => {
  try {
    // Preguntar a ricard sobre la seguridad del user
    // es decir, como hacer de forma segura que el user se actualice
    const { id } = req.params
    const { ClienteId } = req.body

    const trabajo = await Trabajo.findOne({ where: { id } })

    if (!trabajo) {
      return res.status(404).json({
        ok: false,
        msg: 'El trabajo no existe',
      })
    }

    if (ClienteId !== trabajo.ClienteId) {
      return res.status(401).json({
        ok: false,
        msg: 'No tienes privilegios para editar este usuario',
      })
    }

    await trabajo.update(req.body)

    return res.status(200).json({
      ok: true,
      data: trabajo,
      msg: 'Oferta de trabajo actualizada correctamente',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'La oferta de trabajo no se ha podido actualizar',
    })
  }
}

export const deleteTrabajo = async (req, res = response) => {
  try {
    const { id } = req.params
    const trabajo = await Trabajo.findOne({ where: { id } })
    console.log(id, '<-------------')
    if (!trabajo) {
      return res.status(404).json({
        ok: false,
        msg: 'No se ha encontrado la oferta de trabajo',
      })
    }

    await trabajo.destroy()

    return res.status(200).json({
      ok: true,
      data: trabajo,
      msg: 'Trabajo eliminado',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'La oferta de trabajo no se ha podido eliminar',
    })
  }
}

export const inscribirteTrabajo = async (req, res = response) => {
  // Preguntar ricard modelos
  try {
    const { trabajoid, clienteid } = req.params
    await TrabajosClientes.create(
      { ClienteId: clienteid, TrabajoId: trabajoid },
      { include: [{ model: Clientes }, { model: Trabajo }] }
    )

    const trabajoCliente = await TrabajosClientes.findOne({
      where: { ClienteId: clienteid, TrabajoId: trabajoid },
      include: [{ model: Clientes }, { model: Trabajo }],
    })

    return res.status(200).json({
      ok: true,
      data: trabajoCliente,
      msg: 'Te has inscrito correctamnete',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'No te has podido inscribir a la oferta de trabajo',
    })
  }
}

export const getTrabajosInscritos = async (req, res = response) => {
  try {
    const { clienteid } = req.params

    const trabajoCliente = await TrabajosClientes.findAll({
      where: { ClienteId: clienteid },
      include: [{ model: Trabajo }],
    })

    let trabajos = []

    trabajoCliente.forEach((element) => {
      let { Trabajo: trabajo, ...rest } = element
      trabajos.push(trabajo)
    })

    return res.status(200).json({
      ok: true,
      data: trabajos,
      msg: 'Información obtenida correctamente',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'No se ha podido obtener los datos de las inscripciones',
    })
  }
}

export const getTrabajosCreadosPorMi = async (req, res = response) => {
  try {
    const { id } = req.params
    // const misTrabajosWithUsers = await TrabajosClientes.findAll({
    //   where: { '$Trabajo.ClienteId$': id },
    //   include: [{ model: Clientes }, { model: Trabajo }],
    // })

    const misTrabajos = await Trabajo.findAll({
      where: { ClienteId: id },
      include: [{ model: TrabajosClientes }],
    })

    return res.status(200).json({
      ok: true,
      data: misTrabajos,
      msg: 'Trabajos recibidos',
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
      msg: 'No se han podido ob tener los trabajos creados',
    })
  }
}
