import { response } from 'express'
import { Clientes } from '../models/clienteModel.js'

export const getClienteById = async (req, res = response) => {
  try {
    const { id } = req.params
    const user = await Clientes.findOne({ where: { id } })

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe',
      })
    }

    return res.status(200).json({
      ok: true,
      data: user,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const loginCliente = async (req, res = response) => {
  try {
    const { email, password } = req.body
    const user = await Clientes.findOne({ where: { email, password } })

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario o la contraseña no son correctos',
      })
    }

    return res.status(200).json({
      ok: true,
      data: user,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const crearCuenta = async (req, res = response) => {
  try {
    const { nombre, apellidos, password, fecha, country, rol, email, edad, pais } = req.body

    const user = await Clientes.create({ nombre, apellidos, password, fecha, country, rol, email, edad, pais })

    return res.status(200).json({
      ok: true,
      data: user,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const updateCuenta = async (req, res = response) => {
  try {
    // Preguntar a ricard sobre la seguridad del user
    // es decir, como hacer de forma segura que el user se actualice
    const { id } = req.params
    const { id: uid } = req.body

    const user = await Clientes.findOne({ where: { id } })

    if (!user) {
      return res.status(404).json({
        ok: false,
        error: 'El usuario no existe',
      })
    }

    if (uid !== Number(id)) {
      return res.status(401).json({
        ok: false,
        error: 'No tienes privilegios para editar este usuario',
      })
    }

    // quitar foto del body

    await user.update(req.body)

    return res.status(200).json({
      ok: true,
      data: user,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}
