import { Idioma } from '../models/idiomasModel.js'

export const getIdioma = async (req, res) => {
  try {
    const idiomas = await Idioma.findAll()

    return res.status(200).json({
      ok: true,
      data: idiomas,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}
